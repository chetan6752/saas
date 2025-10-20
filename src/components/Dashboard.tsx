import * as React from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Activity, 
  AlertTriangle, 
  TrendingUp, 
  Users, 
  MapPin, 
  Bell,
  Shield,
  LogOut,
  ChevronDown,
  Filter,
  Download
} from "lucide-react";
import { motion } from "motion/react";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ViewAllAlertsModal } from "./ViewAllAlertsModal";
import { toast } from "sonner@2.0.3";

interface DashboardProps {
  onLogout: () => void;
}

// Sample data for charts with beautiful color scheme
const alertsData = [
  { name: 'Mon', alerts: 12, resolved: 10 },
  { name: 'Tue', alerts: 19, resolved: 16 },
  { name: 'Wed', alerts: 15, resolved: 14 },
  { name: 'Thu', alerts: 25, resolved: 20 },
  { name: 'Fri', alerts: 22, resolved: 19 },
  { name: 'Sat', alerts: 18, resolved: 17 },
  { name: 'Sun', alerts: 14, resolved: 12 },
];

const patientVolumeData = [
  { time: '00:00', volume: 45 },
  { time: '04:00', volume: 32 },
  { time: '08:00', volume: 78 },
  { time: '12:00', volume: 120 },
  { time: '16:00', volume: 95 },
  { time: '20:00', volume: 68 },
  { time: '23:59', volume: 52 },
];

const diseaseDistribution = [
  { name: 'Respiratory', value: 45, color: '#0ea5e9' },
  { name: 'Dengue', value: 25, color: '#10b981' },
  { name: 'Malaria', value: 15, color: '#8b5cf6' },
  { name: 'Other', value: 15, color: '#f59e0b' },
];

const regionalData = [
  { region: 'Dadar', risk: 85 },
  { region: 'Bandra', risk: 72 },
  { region: 'Andheri', risk: 68 },
  { region: 'Kurla', risk: 91 },
  { region: 'Powai', risk: 55 },
];

export function Dashboard({ onLogout }: DashboardProps) {
  const [showViewAllModal, setShowViewAllModal] = React.useState(false);

  const recentAlerts = [
    {
      id: 1,
      type: 'High',
      title: 'Respiratory Surge Expected',
      location: 'Dadar Area',
      time: '2 hours ago',
      status: 'Active',
    },
    {
      id: 2,
      type: 'High',
      title: 'Dengue Cases Rising',
      location: 'Kurla Area',
      time: '5 hours ago',
      status: 'Monitoring',
    },
    {
      id: 3,
      type: 'Medium',
      title: 'Air Quality Deteriorating',
      location: 'Andheri Area',
      time: '8 hours ago',
      status: 'Monitoring',
    },
    {
      id: 4,
      type: 'High',
      title: 'Flu Outbreak Predicted',
      location: 'Bandra Area',
      time: '12 hours ago',
      status: 'Active',
    },
    {
      id: 5,
      type: 'Medium',
      title: 'Malaria Risk Elevated',
      location: 'Powai Area',
      time: '18 hours ago',
      status: 'Monitoring',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-emerald-50/40 to-violet-50/30 relative overflow-hidden">
      {/* Animated Background - Optimized */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-sky-300 to-cyan-200 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-300 to-green-200 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <Shield className="w-8 h-8 text-sky-500" strokeWidth={1.5} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full animate-pulse" />
                </div>
              </div>
              <span className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
                Arogya Sentinel
              </span>
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-2"
                  onClick={() => toast.info("Filter options", { description: "Filtering by: Active alerts, Last 7 days" })}
                >
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-2"
                  onClick={() => toast.success("Export started", { description: "Downloading dashboard report as PDF..." })}
                >
                  <Download className="w-4 h-4" />
                  Export
                </Button>
              </motion.div>
              <div className="flex items-center gap-3 px-3 py-2 bg-gray-100 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-emerald-500 flex items-center justify-center">
                  <span className="text-white text-sm">AD</span>
                </div>
                <div className="hidden md:block">
                  <div className="text-sm text-gray-900">Admin User</div>
                  <div className="text-xs text-gray-500">admin@hospital.com</div>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button onClick={onLogout} variant="outline" size="sm" className="gap-2 text-red-600 border-red-200 hover:bg-red-50">
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-8 relative z-10">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <motion.h1 
            className="bg-gradient-to-r from-sky-600 via-emerald-500 to-violet-600 bg-clip-text text-transparent mb-2"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Welcome to Your Health Intelligence Dashboard
          </motion.h1>
          <p className="text-gray-600">Real-time monitoring and predictive analytics for Mumbai's public health</p>
          
          {/* Live Indicator */}
          <motion.div 
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-white/80 rounded-full border border-emerald-200 shadow-sm"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(16, 185, 129, 0)",
                "0 0 0 8px rgba(16, 185, 129, 0.1)",
                "0 0 0 0 rgba(16, 185, 129, 0)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div 
              className="w-2 h-2 bg-emerald-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-sm text-emerald-600">System Active • Last updated 2 min ago</span>
          </motion.div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { 
              title: 'Active Alerts', 
              value: '8', 
              change: '+12%', 
              icon: Bell, 
              gradient: 'from-amber-500 to-orange-500',
              bg: 'from-amber-50 to-orange-50'
            },
            { 
              title: 'Patient Volume', 
              value: '1,245', 
              change: '+8%', 
              icon: Users, 
              gradient: 'from-sky-500 to-blue-500',
              bg: 'from-sky-50 to-blue-50'
            },
            { 
              title: 'Risk Score', 
              value: '72/100', 
              change: '-5%', 
              icon: Activity, 
              gradient: 'from-emerald-500 to-green-500',
              bg: 'from-emerald-50 to-green-50'
            },
            { 
              title: 'Accuracy Rate', 
              value: '95.8%', 
              change: '+2%', 
              icon: TrendingUp, 
              gradient: 'from-violet-500 to-purple-500',
              bg: 'from-violet-50 to-purple-50'
            },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`p-6 bg-white border-gray-200 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group cursor-pointer`}>
                  {/* Static Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="outline" className={stat.change.startsWith('+') ? "border-emerald-200 text-emerald-600" : "border-red-200 text-red-600"}>
                        {stat.change}
                      </Badge>
                    </div>
                    <div className="text-gray-600 text-sm mb-1">{stat.title}</div>
                    <div className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Patient Volume Trend */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-gray-900 mb-1">Patient Volume Trend</h3>
                  <p className="text-sm text-gray-500">24-hour monitoring</p>
                </div>
                <Badge className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white">Live</Badge>
              </div>
              <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                  <AreaChart data={patientVolumeData}>
                    <defs>
                      <linearGradient id="volumeGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                    <XAxis 
                      dataKey="time" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#6b7280', fontSize: 12 }}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#6b7280', fontSize: 12 }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="volume" 
                      stroke="#0ea5e9" 
                      fill="url(#volumeGradient)"
                      strokeWidth={3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </motion.div>

          {/* Disease Distribution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-6">
              <h3 className="text-gray-900 mb-1">Disease Distribution</h3>
              <p className="text-sm text-gray-500 mb-6">Current week breakdown</p>
              <div style={{ width: '100%', height: 280 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={diseaseDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={100}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {diseaseDistribution.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.color}
                          stroke="white"
                          strokeWidth={2}
                        />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {diseaseDistribution.map((disease, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ background: disease.color }} />
                    <span className="text-sm text-gray-600">{disease.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Regional Risk Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="p-6">
              <h3 className="text-gray-900 mb-1">Regional Risk Assessment</h3>
              <p className="text-sm text-gray-500 mb-6">High-risk areas require immediate attention</p>
              <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                  <BarChart data={regionalData}>
                    <defs>
                      <linearGradient id="riskGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f59e0b" stopOpacity={1}/>
                        <stop offset="100%" stopColor="#ef4444" stopOpacity={1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                    <XAxis 
                      dataKey="region" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#6b7280', fontSize: 12 }}
                    />
                    <YAxis 
                      domain={[0, 100]}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#6b7280', fontSize: 12 }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                      }}
                      cursor={{ fill: 'rgba(0,0,0,0.05)' }}
                    />
                    <Bar 
                      dataKey="risk" 
                      fill="url(#riskGradient)" 
                      radius={[8, 8, 0, 0]}
                      maxBarSize={60}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </motion.div>

          {/* Recent Alerts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-gray-900">Recent Alerts</h3>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setShowViewAllModal(true)}
                  className="text-sky-600 hover:text-sky-700"
                >
                  View All
                </Button>
              </div>
              <div className="space-y-4">
                {recentAlerts.map((alert) => (
                  <motion.div
                    key={alert.id}
                    className="p-4 rounded-lg border border-gray-200 hover:border-sky-300 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-3">
                      <AlertTriangle className={`w-5 h-5 flex-shrink-0 ${
                        alert.type === 'High' ? 'text-red-500' :
                        alert.type === 'Medium' ? 'text-amber-500' :
                        'text-gray-500'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm text-gray-900 truncate">{alert.title}</span>
                          <Badge 
                            variant="outline" 
                            className={`flex-shrink-0 text-xs ${
                              alert.status === 'Active' ? 'border-red-200 text-red-600' :
                              alert.status === 'Monitoring' ? 'border-amber-200 text-amber-600' :
                              'border-emerald-200 text-emerald-600'
                            }`}
                          >
                            {alert.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <MapPin className="w-3 h-3" />
                          <span>{alert.location}</span>
                          <span>•</span>
                          <span>{alert.time}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Weekly Alerts Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6"
        >
          <Card className="p-6">
            <h3 className="text-gray-900 mb-1">Weekly Alert Trends</h3>
            <p className="text-sm text-gray-500 mb-6">Generated vs Resolved alerts over the past week</p>
            <div style={{ width: '100%', height: 300 }}>
              <ResponsiveContainer>
                <LineChart data={alertsData}>
                  <defs>
                    <linearGradient id="alertGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="resolvedGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Legend 
                    wrapperStyle={{ paddingTop: '20px' }}
                    iconType="circle"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="alerts" 
                    stroke="#f59e0b" 
                    strokeWidth={3}
                    dot={{ fill: '#f59e0b', r: 5, strokeWidth: 2, stroke: 'white' }}
                    activeDot={{ r: 7 }}
                    name="Alerts"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="resolved" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    dot={{ fill: '#10b981', r: 5, strokeWidth: 2, stroke: 'white' }}
                    activeDot={{ r: 7 }}
                    name="Resolved"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* View All Alerts Modal */}
      <ViewAllAlertsModal open={showViewAllModal} onOpenChange={setShowViewAllModal} />
    </div>
  );
}
