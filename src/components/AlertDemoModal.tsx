import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { CheckSquare, Square, AlertTriangle, TrendingUp, MapPin } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

interface AlertDemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AlertDemoModal({ open, onOpenChange }: AlertDemoModalProps) {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setCheckedItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const actionItems = [
    {
      priority: "High",
      action: "Divert 3 temporary staff to the OPD triage area immediately",
      estimatedTime: "30 mins",
    },
    {
      priority: "High",
      action: "Verify Nebulizer stock levels and restock if below 50 units",
      estimatedTime: "1 hour",
    },
    {
      priority: "Medium",
      action: "Alert on-call respiratory specialists for potential call-ins",
      estimatedTime: "15 mins",
    },
    {
      priority: "Medium",
      action: "Prepare additional oxygen supply stations in ER",
      estimatedTime: "45 mins",
    },
    {
      priority: "Low",
      action: "Review and update emergency contact list for suppliers",
      estimatedTime: "20 mins",
    },
  ];

  const dataPoints = [
    { label: "Current AQI", value: "178", status: "Poor" },
    { label: "Social Media Mentions", value: "+245%", status: "Alert" },
    { label: "Pharmacy Sales (Respiratory)", value: "+180%", status: "High" },
    { label: "Predicted Surge", value: "48hrs", status: "Active" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-orange-500/5 to-red-500/5 pointer-events-none"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          style={{ backgroundSize: "200% 200%" }}
        />

        <DialogHeader className="relative z-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <DialogTitle>Live Sentinel Alert: Expected Respiratory Surge</DialogTitle>
                <Badge className="bg-amber-500 text-white">Active</Badge>
              </div>
              <DialogDescription className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>Dadar Area, Mumbai</span>
                <span className="text-gray-400">•</span>
                <span>Alert generated 2 hours ago</span>
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Data Overview */}
          <div>
            <h3 className="text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-sky-500" />
              Key Indicators
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {dataPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-sky-50 to-emerald-50 rounded-lg p-4 border border-sky-100"
                >
                  <div className="text-xs text-gray-600 mb-1">{point.label}</div>
                  <div className="text-sky-600 mb-1">{point.value}</div>
                  <Badge variant="outline" className="text-xs border-sky-200 text-sky-600">
                    {point.status}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Projected Surge Graph */}
          <div>
            <h3 className="text-gray-900 mb-4">Projected Patient Volume</h3>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="h-48 relative">
                <svg viewBox="0 0 600 200" className="w-full h-full">
                  {/* Grid lines */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line
                      key={i}
                      x1="50"
                      y1={50 + i * 37.5}
                      x2="550"
                      y2={50 + i * 37.5}
                      stroke="#e5e7eb"
                      strokeWidth="1"
                    />
                  ))}

                  {/* Current baseline */}
                  <motion.path
                    d="M50,150 L150,145 L250,148 L350,146 L450,147 L550,145"
                    stroke="#94a3b8"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1 }}
                  />

                  {/* Predicted surge */}
                  <motion.path
                    d="M350,146 L400,130 L450,95 L500,70 L550,60"
                    stroke="url(#alertGradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />

                  {/* Labels */}
                  <text x="300" y="190" fontSize="12" fill="#6b7280" textAnchor="middle">
                    Timeline (Next 72 Hours)
                  </text>
                  <text x="350" y="140" fontSize="10" fill="#94a3b8">Now</text>
                  <text x="550" y="55" fontSize="10" fill="#f59e0b">+185%</text>

                  <defs>
                    <linearGradient id="alertGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#dc2626" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* Action Items Checklist */}
          <div>
            <h3 className="text-gray-900 mb-4">Action Checklist</h3>
            <div className="space-y-3">
              {actionItems.map((item, index) => {
                const isChecked = checkedItems.includes(index);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    onClick={() => toggleItem(index)}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      isChecked
                        ? "bg-emerald-50 border-emerald-200"
                        : "bg-white border-gray-200 hover:border-sky-300"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5">
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 text-emerald-600" />
                        ) : (
                          <Square className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <span className={`${isChecked ? "line-through text-gray-500" : "text-gray-900"}`}>
                            {item.action}
                          </span>
                          <Badge
                            variant="outline"
                            className={`flex-shrink-0 ${
                              item.priority === "High"
                                ? "border-red-200 text-red-600"
                                : item.priority === "Medium"
                                ? "border-amber-200 text-amber-600"
                                : "border-gray-200 text-gray-600"
                            }`}
                          >
                            {item.priority}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-500">Est. time: {item.estimatedTime}</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="bg-sky-50 rounded-lg p-4 border border-sky-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-700">Checklist Progress</span>
              <span className="text-sm text-sky-600">
                {checkedItems.length} of {actionItems.length} completed
              </span>
            </div>
            <div className="w-full bg-white rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-sky-500 to-emerald-500"
                initial={{ width: 0 }}
                animate={{ width: `${(checkedItems.length / actionItems.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
