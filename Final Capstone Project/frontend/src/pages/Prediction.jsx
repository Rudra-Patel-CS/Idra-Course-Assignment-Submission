import React, { useState } from 'react';
import Header from '../components/Header';
import { predictPurchase } from '../services/api';
import { BrainCircuit, Loader2, CheckCircle2, XCircle, Sparkles, Sliders, ShoppingBag, ShieldAlert } from 'lucide-react';

const Prediction = () => {
  const [formData, setFormData] = useState({
    customer_id: 1803,
    session_id: 101,
    device_type: 1, // Mobile
    user_type: 0, // New Visitor
    marketing_channel: 1, // Organic Search
    product_id: 412,
    product_category: 1, // Clothing
    unit_price: 150.00,
    quantity: 1,
    discount_percent: 0,
    pages_viewed: 4,
    time_on_site_sec: 180,
    added_to_cart: 0, // No
    rating: 3,
    review_text: 0,
    review_helpful_votes: 0, // 0 helpful votes -> Unlikely to Purchase
    payment_method: 1,
    visit_date: '2024-11-28',
    session_duration_bucket: 'Short',
    location: 112
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) || 0 : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await predictPurchase(formData);
      setResult(response);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.detail || "Failed to generate prediction. Check backend status.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 bg-slate-950 pb-12">
      <Header
        title="ML Purchase Intent Predictor"
        subtitle="Real-time inference using the authoritative Decision Tree Classifier pipeline"
      />

      <div className="p-6 max-w-7xl mx-auto space-y-6">
        {/* Leakage Rule Alert */}
        <div className="glass-card rounded-2xl p-4 border border-cyan-500/20 bg-cyan-950/20 flex items-center justify-between">
          <div className="flex items-center space-x-3 text-xs text-cyan-300">
            <ShieldAlert className="w-5 h-5 text-cyan-400 flex-shrink-0" />
            <span>
              <strong>Data Leakage Compliant:</strong> Outcome variables (<code className="bg-slate-900 px-1 py-0.5 rounded text-cyan-200">revenue</code>, <code className="bg-slate-900 px-1 py-0.5 rounded text-cyan-200">revenue_normalized</code>, <code className="bg-slate-900 px-1 py-0.5 rounded text-cyan-200">cart_abandoned</code>, <code className="bg-slate-900 px-1 py-0.5 rounded text-cyan-200">purchased</code>) are strictly excluded from prediction inputs.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Prediction Form */}
          <div className="lg:col-span-2 glass-card rounded-2xl p-6 border border-slate-800">
            <div className="flex items-center space-x-2 mb-6 pb-4 border-b border-slate-800">
              <Sliders className="w-5 h-5 text-cyan-400" />
              <h2 className="font-bold text-slate-100 text-base">Session & Customer Features Input</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Section 1: Session & Acquisition */}
              <div>
                <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3">1. Session & Acquisition Attributes</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Device Type</label>
                    <select
                      name="device_type"
                      value={formData.device_type}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                    >
                      <option value={0}>Desktop</option>
                      <option value={1}>Mobile</option>
                      <option value={2}>Tablet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">User Type</label>
                    <select
                      name="user_type"
                      value={formData.user_type}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                    >
                      <option value={0}>New Visitor</option>
                      <option value={1}>Returning Customer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Marketing Channel</label>
                    <select
                      name="marketing_channel"
                      value={formData.marketing_channel}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                    >
                      <option value={0}>Direct</option>
                      <option value={1}>Organic Search</option>
                      <option value={2}>Paid Search</option>
                      <option value={3}>Social Media</option>
                      <option value={4}>Email Campaign</option>
                      <option value={5}>Referral</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 2: Product & Pricing */}
              <div>
                <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3">2. Product & Cart Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Product Category</label>
                    <select
                      name="product_category"
                      value={formData.product_category}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                    >
                      <option value={0}>Electronics</option>
                      <option value={1}>Clothing</option>
                      <option value={2}>Home & Kitchen</option>
                      <option value={3}>Books</option>
                      <option value={4}>Beauty</option>
                      <option value={5}>Sports</option>
                      <option value={6}>Toys</option>
                      <option value={7}>Automotive</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Unit Price ($)</label>
                    <input
                      type="number"
                      step="0.01"
                      name="unit_price"
                      value={formData.unit_price}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Quantity</label>
                    <input
                      type="number"
                      name="quantity"
                      min="1"
                      max="20"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Discount (%)</label>
                    <input
                      type="number"
                      name="discount_percent"
                      min="0"
                      max="50"
                      value={formData.discount_percent}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Engagement Signals */}
              <div>
                <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3">3. Behavioral Engagement Signals</h3>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Pages Viewed</label>
                    <input
                      type="number"
                      name="pages_viewed"
                      min="1"
                      max="50"
                      value={formData.pages_viewed}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Time on Site (Sec)</label>
                    <input
                      type="number"
                      name="time_on_site_sec"
                      min="10"
                      max="10000"
                      value={formData.time_on_site_sec}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Added to Cart?</label>
                    <select
                      name="added_to_cart"
                      value={formData.added_to_cart}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 font-semibold"
                    >
                      <option value={1}>Yes (Added)</option>
                      <option value={0}>No (Not Added)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Duration Bucket</label>
                    <select
                      name="session_duration_bucket"
                      value={formData.session_duration_bucket}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                    >
                      <option value="Long">Long</option>
                      <option value="Short">Short</option>
                      <option value="Very Long">Very Long</option>
                      <option value="Very Short">Very Short</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 4: Reviews, Payment & Date */}
              <div>
                <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3">4. Reviews & Checkout Metadata</h3>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Product Rating (1-5)</label>
                    <input
                      type="number"
                      name="rating"
                      min="1"
                      max="5"
                      value={formData.rating}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Helpful Review Votes</label>
                    <input
                      type="number"
                      name="review_helpful_votes"
                      min="0"
                      max="50"
                      value={formData.review_helpful_votes}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Payment Method</label>
                    <select
                      name="payment_method"
                      value={formData.payment_method}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                    >
                      <option value={0}>Credit Card</option>
                      <option value={1}>Debit Card</option>
                      <option value={2}>UPI</option>
                      <option value={3}>Net Banking</option>
                      <option value={4}>Digital Wallet</option>
                      <option value={5}>Cash on Delivery</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Visit Date</label>
                    <input
                      type="date"
                      name="visit_date"
                      value={formData.visit_date}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 flex items-center justify-center space-x-2 transition-all"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Analysing customer behaviour...</span>
                  </>
                ) : (
                  <>
                    <BrainCircuit className="w-5 h-5" />
                    <span>Predict Purchase Intent</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Result Card Side Panel */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-6 border border-slate-800 flex flex-col justify-between min-h-[400px]">
              <div>
                <h3 className="font-bold text-slate-100 text-base flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Model Inference Result</span>
                </h3>

                {error && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-xs">
                    <p className="font-bold mb-1">Inference Error</p>
                    <p>{error}</p>
                  </div>
                )}

                {!result && !error && !loading && (
                  <div className="text-center py-12 text-slate-400 space-y-3">
                    <BrainCircuit className="w-12 h-12 text-slate-700 mx-auto animate-bounce" />
                    <p className="text-xs font-medium">
                      Fill in the session features and click <br />
                      <strong className="text-cyan-400">"Predict Purchase Intent"</strong> to run inference.
                    </p>
                  </div>
                )}

                {loading && (
                  <div className="text-center py-12 text-slate-300 space-y-3">
                    <Loader2 className="w-10 h-10 text-cyan-400 animate-spin mx-auto" />
                    <p className="text-xs font-medium">Executing Scikit-Learn Pipeline...</p>
                  </div>
                )}

                {result && !loading && (
                  <div className="space-y-6 animate-fadeIn">
                    {/* Prediction Badge */}
                    <div className={`p-5 rounded-2xl border text-center ${result.prediction === 1
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                      : 'bg-red-500/10 border-red-500/30 text-red-400'
                      }`}>
                      {result.prediction === 1 ? (
                        <CheckCircle2 className="w-12 h-12 mx-auto mb-2 text-emerald-400" />
                      ) : (
                        <XCircle className="w-12 h-12 mx-auto mb-2 text-red-400" />
                      )}
                      <h4 className="text-xl font-extrabold tracking-tight">{result.purchase_intent}</h4>
                      <p className="text-xs mt-1 opacity-80">
                        {result.prediction === 1 ? 'High likelihood of completing checkout' : 'Session unlikely to convert to purchase'}
                      </p>
                    </div>

                    {/* Probability Progress Meter */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-slate-400">Purchase Probability</span>
                        <span className="text-cyan-400 font-mono text-sm">{(result.probability * 100).toFixed(1)}%</span>
                      </div>
                      <div className="w-full bg-slate-900 rounded-full h-3 border border-slate-800 overflow-hidden">
                        <div
                          className={`h-full transition-all duration-500 ${result.prediction === 1
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                            : 'bg-gradient-to-r from-red-500 to-orange-400'
                            }`}
                          style={{ width: `${Math.max(5, result.probability * 100)}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Summary Info */}
                    <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800 space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Model Used</span>
                        <span className="text-slate-200 font-mono">DecisionTree (Depth 8)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Feature Count</span>
                        <span className="text-slate-200 font-mono">26 Features</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Target Class</span>
                        <span className="text-slate-200 font-mono">purchased = {result.prediction}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prediction;
