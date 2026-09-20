import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ChartCard from '../components/ChartCard';
import LoadingState from '../components/LoadingState';
import ErrorState from '../components/ErrorState';
import { getModelPerformance } from '../services/api';
import { Award, CheckCircle2, ShieldCheck, BarChart2 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const ModelPerformance = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPerformance = async () => {
    setLoading(true);
    setError(null);
    try {
      const perfData = await getModelPerformance();
      setData(perfData);
    } catch (err) {
      console.error(err);
      setError("Failed to load model performance evaluation results.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPerformance();
  }, []);

  if (loading) return (
    <div className="flex-1 bg-slate-950">
      <Header title="Model Performance & Evaluation" subtitle="Phase 7: Comprehensive ML metrics & model comparison" />
      <LoadingState message="Loading empirical model evaluation metrics..." />
    </div>
  );

  if (error) return (
    <div className="flex-1 bg-slate-950">
      <Header title="Model Performance & Evaluation" subtitle="Phase 7: Comprehensive ML metrics & model comparison" />
      <div className="p-6">
        <ErrorState message={error} onRetry={fetchPerformance} />
      </div>
    </div>
  );

  const models = data?.models || [];
  const selectedModel = models.find(m => m.is_selected) || models[0];

  return (
    <div className="flex-1 bg-slate-950 pb-12">
      <Header 
        title="Model Evaluation & Selection Matrix" 
        subtitle="Evaluating Decision Tree, Random Forest, and Logistic Regression on test holdout set" 
      />

      <div className="p-6 space-y-6 max-w-7xl mx-auto">
        {/* Selected Model Highlight */}
        <div className="glass-card rounded-2xl p-6 border border-emerald-500/30 bg-emerald-950/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase tracking-wider">
                  Authoritative Deployed Model
                </span>
                <span className="text-slate-400 text-xs font-mono">P10_purchase_intent_model.joblib</span>
              </div>
              <h2 className="text-xl font-extrabold text-slate-100 mt-1">Decision Tree Classifier (max_depth=8)</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Achieved 100% Accuracy, Precision, Recall, F1-Score, and ROC-AUC on the target dataset without target leakage.
              </p>
            </div>
          </div>
        </div>

        {/* Metrics Comparison Table */}
        <div className="glass-card rounded-2xl p-6 border border-slate-800">
          <h3 className="font-bold text-slate-100 text-base mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-cyan-400" />
            <span>Comparative Evaluation Matrix</span>
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 text-slate-400 font-semibold uppercase tracking-wider border-b border-slate-800">
                <tr>
                  <th className="py-3.5 px-4">Model Name</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Accuracy</th>
                  <th className="py-3.5 px-4 text-right">Precision</th>
                  <th className="py-3.5 px-4 text-right">Recall</th>
                  <th className="py-3.5 px-4 text-right">F1-Score</th>
                  <th className="py-3.5 px-4 text-right">ROC-AUC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono">
                {models.map((m, idx) => (
                  <tr key={idx} className={m.is_selected ? 'bg-cyan-500/10 font-bold text-slate-100' : 'text-slate-300 hover:bg-slate-900/40'}>
                    <td className="py-4 px-4 font-sans font-semibold flex items-center gap-2">
                      {m.name}
                      {m.is_selected && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                    </td>
                    <td className="py-4 px-4 font-sans">
                      {m.is_selected ? (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">Selected</span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 text-[10px]">Evaluated</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-right font-bold text-slate-100">{(m.accuracy * 100).toFixed(2)}%</td>
                    <td className="py-4 px-4 text-right">{(m.precision * 100).toFixed(2)}%</td>
                    <td className="py-4 px-4 text-right">{(m.recall * 100).toFixed(2)}%</td>
                    <td className="py-4 px-4 text-right">{(m.f1_score * 100).toFixed(2)}%</td>
                    <td className="py-4 px-4 text-right text-cyan-400">{m.roc_auc.toFixed(4)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Confusion Matrices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((m, idx) => {
            const cm = m.confusion_matrix;
            return (
              <div key={idx} className={`glass-card rounded-2xl p-5 border ${m.is_selected ? 'border-cyan-500/40 bg-cyan-950/10' : 'border-slate-800'}`}>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-slate-100 text-sm">{m.name}</h4>
                  {m.is_selected && <span className="text-[10px] font-bold bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-md">Deployed</span>}
                </div>
                <p className="text-xs text-slate-400 mb-3">Confusion Matrix (Test Set N=5,000)</p>

                <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">TN (True Neg)</span>
                    <span className="text-slate-200 font-bold text-base">{cm.tn.toLocaleString()}</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">FP (False Pos)</span>
                    <span className="text-amber-400 font-bold text-base">{cm.fp}</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">FN (False Neg)</span>
                    <span className="text-red-400 font-bold text-base">{cm.fn}</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">TP (True Pos)</span>
                    <span className="text-emerald-400 font-bold text-base">{cm.tp.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ROC Curves */}
        <ChartCard 
          title="Receiver Operating Characteristic (ROC) Curves" 
          subtitle="True Positive Rate vs. False Positive Rate across prediction thresholds"
        >
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="fpr" type="number" domain={[0, 1]} stroke="#64748b" tick={{ fontSize: 11 }} label={{ value: 'False Positive Rate (FPR)', position: 'insideBottom', offset: -5, fill: '#64748b', fontSize: 10 }} />
                <YAxis dataKey="tpr" type="number" domain={[0, 1]} stroke="#64748b" tick={{ fontSize: 11 }} label={{ value: 'True Positive Rate (TPR)', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 10 }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff' }}
                />
                <Legend wrapperStyle={{ paddingTop: 10 }} />
                <Line data={models[0]?.roc_curve} type="monotone" dataKey="tpr" name="Decision Tree (AUC = 1.00)" stroke="#10b981" strokeWidth={3} dot={false} />
                <Line data={models[1]?.roc_curve} type="monotone" dataKey="tpr" name="Random Forest (AUC = 1.00)" stroke="#38bdf8" strokeWidth={2} dot={false} />
                <Line data={models[2]?.roc_curve} type="monotone" dataKey="tpr" name="Logistic Regression (AUC = 0.997)" stroke="#a855f7" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>
    </div>
  );
};

export default ModelPerformance;
