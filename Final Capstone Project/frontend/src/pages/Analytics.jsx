import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ChartCard from '../components/ChartCard';
import LoadingState from '../components/LoadingState';
import ErrorState from '../components/ErrorState';
import { getAnalyticsCharts } from '../services/api';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';
import { Filter, Layers, ShoppingBag, Eye, Clock, Smartphone, UserCheck, ShoppingCart } from 'lucide-react';

const Analytics = () => {
  const [charts, setCharts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCharts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAnalyticsCharts();
      setCharts(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load exploratory data analysis charts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharts();
  }, []);

  if (loading) return (
    <div className="flex-1 bg-slate-950">
      <Header title="Exploratory Data Analysis" subtitle="Deep-dive into customer activity & conversion patterns" />
      <LoadingState message="Aggregating 25,000 session behavior records..." />
    </div>
  );

  if (error) return (
    <div className="flex-1 bg-slate-950">
      <Header title="Exploratory Data Analysis" subtitle="Deep-dive into customer activity & conversion patterns" />
      <div className="p-6">
        <ErrorState message={error} onRetry={fetchCharts} />
      </div>
    </div>
  );

  return (
    <div className="flex-1 bg-slate-950 pb-12">
      <Header 
        title="Exploratory Data Analysis & Business Intelligence" 
        subtitle="Empirical statistical findings from the 25,000 session capstone dataset" 
      />

      <div className="p-6 space-y-6 max-w-7xl mx-auto">
        {/* Intro */}
        <div className="glass-card rounded-2xl p-6 border border-slate-800 flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="font-bold text-slate-100 text-lg flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              <span>Session Behavior & Conversion Drivers</span>
            </h2>
            <p className="text-xs text-slate-400">
              Examining behavioral metrics across traffic sources, product categories, user types, and engagement signals.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-cyan-400 font-mono bg-cyan-500/10 px-3 py-1.5 rounded-xl border border-cyan-500/20">
            <span>25,000 Total Observations</span>
          </div>
        </div>

        {/* Grid 1: Channel & Category */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chart 1: Marketing Channel */}
          <ChartCard 
            title="Conversion Rate by Marketing Channel" 
            subtitle="Acquisition channel impact on purchase outcome"
          >
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={charts?.purchase_by_channel || []}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="channel" stroke="#64748b" tick={{ fontSize: 11 }} />
                  <YAxis stroke="#64748b" tick={{ fontSize: 11 }} unit="%" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff' }}
                    formatter={(val) => [`${val}%`, 'Purchase Rate']}
                  />
                  <Bar dataKey="purchase_rate" fill="#38bdf8" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>

          {/* Chart 2: Product Category */}
          <ChartCard 
            title="Conversion Rate by Product Category" 
            subtitle="Comparing conversion rates across 8 major product departments"
          >
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={charts?.purchase_by_category || []}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="category" stroke="#64748b" tick={{ fontSize: 10 }} interval={0} angle={-15} textAnchor="end" />
                  <YAxis stroke="#64748b" tick={{ fontSize: 11 }} unit="%" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff' }}
                    formatter={(val) => [`${val}%`, 'Purchase Rate']}
                  />
                  <Bar dataKey="purchase_rate" fill="#818cf8" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>
        </div>

        {/* Grid 2: User Type, Device Type, Cart Activity */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* User Type */}
          <ChartCard 
            title="User Type Conversion" 
            subtitle="New vs Returning Visitor conversion"
          >
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={charts?.purchase_by_user_type || []}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="user_type" stroke="#64748b" tick={{ fontSize: 11 }} />
                  <YAxis stroke="#64748b" tick={{ fontSize: 11 }} unit="%" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff' }}
                    formatter={(val) => [`${val}%`, 'Conversion Rate']}
                  />
                  <Bar dataKey="purchase_rate" fill="#34d399" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>

          {/* Device Type */}
          <ChartCard 
            title="Device Type Breakdown" 
            subtitle="Desktop vs Mobile vs Tablet conversion"
          >
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={charts?.purchase_by_device || []}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="device" stroke="#64748b" tick={{ fontSize: 11 }} />
                  <YAxis stroke="#64748b" tick={{ fontSize: 11 }} unit="%" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff' }}
                    formatter={(val) => [`${val}%`, 'Conversion Rate']}
                  />
                  <Bar dataKey="purchase_rate" fill="#fbbf24" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>

          {/* Added to Cart Impact */}
          <ChartCard 
            title="Added to Cart Impact" 
            subtitle="Conversion rate based on item added to cart"
          >
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={charts?.added_to_cart_vs_purchase || []}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="added_to_cart" stroke="#64748b" tick={{ fontSize: 11 }} />
                  <YAxis stroke="#64748b" tick={{ fontSize: 11 }} unit="%" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff' }}
                    formatter={(val) => [`${val}%`, 'Conversion Rate']}
                  />
                  <Bar dataKey="purchase_rate" fill="#f472b6" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>
        </div>

        {/* Grid 3: Engagement Metrics (Pages Viewed & Time on Site) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pages Viewed vs Purchase */}
          <ChartCard 
            title="Pages Viewed vs. Purchase Outcome" 
            subtitle="Session depth impact on purchase probability"
          >
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={charts?.pages_viewed_vs_purchase || []}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="pages_bucket" stroke="#64748b" tick={{ fontSize: 11 }} />
                  <YAxis stroke="#64748b" tick={{ fontSize: 11 }} unit="%" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff' }}
                    formatter={(val) => [`${val}%`, 'Conversion Rate']}
                  />
                  <Line type="monotone" dataKey="purchase_rate" stroke="#06b6d4" strokeWidth={3} dot={{ r: 5, fill: '#06b6d4' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>

          {/* Time on Site vs Purchase */}
          <ChartCard 
            title="Time on Site vs. Purchase Outcome" 
            subtitle="Session duration impact on final purchase intent"
          >
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={charts?.time_on_site_vs_purchase || []}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="time_bucket" stroke="#64748b" tick={{ fontSize: 11 }} />
                  <YAxis stroke="#64748b" tick={{ fontSize: 11 }} unit="%" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff' }}
                    formatter={(val) => [`${val}%`, 'Conversion Rate']}
                  />
                  <Line type="monotone" dataKey="purchase_rate" stroke="#a855f7" strokeWidth={3} dot={{ r: 5, fill: '#a855f7' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
