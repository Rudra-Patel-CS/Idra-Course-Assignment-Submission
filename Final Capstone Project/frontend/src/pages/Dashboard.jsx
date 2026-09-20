import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import StatCard from '../components/StatCard';
import ChartCard from '../components/ChartCard';
import LoadingState from '../components/LoadingState';
import ErrorState from '../components/ErrorState';
import { getAnalyticsOverview, getAnalyticsCharts, getModelInfo } from '../services/api';
import { ShoppingBag, Users, Clock, FileText, ArrowRight, BrainCircuit, CheckCircle, ShieldCheck } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const COLORS = ['#ef4444', '#10b981'];

const Dashboard = () => {
  const [overview, setOverview] = useState(null);
  const [charts, setCharts] = useState(null);
  const [modelInfo, setModelInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [ovData, chData, infoData] = await Promise.all([
        getAnalyticsOverview(),
        getAnalyticsCharts(),
        getModelInfo()
      ]);
      setOverview(ovData);
      setCharts(chData);
      setModelInfo(infoData);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch dashboard statistics from FastAPI server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return (
    <div className="flex-1 bg-slate-950">
      <Header title="Executive Overview" subtitle="Project #10: Online Shopping Behaviour & Purchase Intent" />
      <LoadingState message="Connecting to FastAPI backend & loading dataset metrics..." />
    </div>
  );

  if (error) return (
    <div className="flex-1 bg-slate-950">
      <Header title="Executive Overview" subtitle="Project #10: Online Shopping Behaviour & Purchase Intent" />
      <div className="p-6">
        <ErrorState message={error} onRetry={fetchData} />
      </div>
    </div>
  );

  return (
    <div className="flex-1 bg-slate-950 pb-12">
      <Header 
        title="Executive Overview Dashboard" 
        subtitle="Analysing Customer Session Behaviour and Predicting Purchase Intent" 
      />

      <div className="p-6 space-y-6 max-w-7xl mx-auto">
        {/* Banner */}
        <div className="glass-card rounded-2xl p-6 border border-cyan-500/20 bg-gradient-to-r from-cyan-950/40 via-slate-900 to-slate-950 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-semibold">
                IDRA Capstone Project #10
              </span>
              <h2 className="text-2xl font-extrabold text-slate-100 mt-2 tracking-tight">
                Online Shopping Behaviour & Purchase Intent Prediction
              </h2>
              <p className="text-slate-400 text-sm max-w-2xl mt-1 leading-relaxed">
                Full-stack machine learning solution analyzing 25,000 customer sessions to predict purchase intent in real-time using a trained Decision Tree Classifier pipeline.
              </p>
            </div>
            <Link
              to="/prediction"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 flex items-center gap-2 transition-all whitespace-nowrap"
            >
              <BrainCircuit className="w-4 h-4" />
              <span>Launch Live Predictor</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            title="Total Session Records" 
            value={overview?.total_sessions?.toLocaleString() || "25,000"} 
            subtitle="Analyzed e-commerce sessions" 
            icon={Users} 
            color="cyan" 
          />
          <StatCard 
            title="Purchase Count" 
            value={overview?.purchase_count?.toLocaleString() || "5,616"} 
            subtitle={`Class 1 (Rate: ${overview?.purchase_rate}%)`} 
            icon={ShoppingBag} 
            color="emerald" 
          />
          <StatCard 
            title="Avg Time on Site" 
            value={`${Math.round((overview?.avg_session_time_sec || 903) / 60)} min`} 
            subtitle={`${overview?.avg_session_time_sec} total seconds`} 
            icon={Clock} 
            color="purple" 
          />
          <StatCard 
            title="Avg Pages Viewed" 
            value={overview?.avg_pages_viewed || "12.54"} 
            subtitle="Pages per session" 
            icon={FileText} 
            color="amber" 
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Purchase Outcome Distribution */}
          <ChartCard 
            title="Target Class Distribution" 
            subtitle="Outcome variable: purchased (0 = No, 1 = Yes)"
          >
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={charts?.purchase_distribution || []}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {charts?.purchase_distribution?.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff' }}
                    formatter={(value) => [`${value.toLocaleString()} sessions`, 'Count']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center space-x-6 text-xs mt-2">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                <span className="text-slate-300">Not Purchased (77.5%)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                <span className="text-slate-300">Purchased (22.5%)</span>
              </div>
            </div>
          </ChartCard>

          {/* Purchase Rate by Marketing Channel */}
          <ChartCard 
            title="Conversion by Marketing Channel" 
            subtitle="Purchase rate (%) across acquisition channels"
          >
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={charts?.purchase_by_channel || []}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="channel" stroke="#64748b" tick={{ fontSize: 10 }} interval={0} angle={-15} textAnchor="end" />
                  <YAxis stroke="#64748b" tick={{ fontSize: 11 }} unit="%" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff' }}
                    formatter={(val) => [`${val}%`, 'Conversion Rate']}
                  />
                  <Bar dataKey="purchase_rate" fill="#0284c7" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>

          {/* Model Status Card */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Deployed Model Engine</span>
              </div>
              <h3 className="font-bold text-slate-100 text-lg">Decision Tree Classifier</h3>
              <p className="text-xs text-slate-400 mt-1">
                Authoritative pipeline loaded from <code className="text-cyan-300 bg-slate-900 px-1 py-0.5 rounded">P10_purchase_intent_model.joblib</code>
              </p>

              <div className="mt-4 space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Max Depth</span>
                  <span className="text-slate-200 font-mono">8</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Feature Count</span>
                  <span className="text-slate-200 font-mono">26 Features</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Target Accuracy</span>
                  <span className="text-emerald-400 font-mono font-bold">100.0%</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">ROC-AUC Score</span>
                  <span className="text-emerald-400 font-mono font-bold">1.0000</span>
                </div>
              </div>
            </div>

            <Link
              to="/model-performance"
              className="mt-6 w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 text-xs font-semibold text-center border border-slate-700 flex items-center justify-center gap-2 transition-colors"
            >
              <span>View Comparative Model Performance</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
