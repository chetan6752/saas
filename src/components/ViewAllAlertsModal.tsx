import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { AlertTriangle, MapPin, Clock, TrendingUp } from "lucide-react";

interface ViewAllAlertsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const allAlerts = [
  {
    id: 1,
    type: 'High',
    title: 'Respiratory Surge Expected',
    location: 'Dadar Area',
    time: '2 hours ago',
    status: 'Active',
    details: 'Predicted 45% increase in respiratory cases',
    confidence: 92,
  },
  {
    id: 2,
    type: 'High',
    title: 'Dengue Cases Rising',
    location: 'Kurla Area',
    time: '5 hours ago',
    status: 'Monitoring',
    details: 'Standing water reports increased by 60%',
    confidence: 87,
  },
  {
    id: 3,
    type: 'Medium',
    title: 'Air Quality Deteriorating',
    location: 'Andheri Area',
    time: '8 hours ago',
    status: 'Monitoring',
    details: 'AQI crossed 200, expect respiratory issues',
    confidence: 78,
  },
  {
    id: 4,
    type: 'High',
    title: 'Flu Outbreak Predicted',
    location: 'Bandra Area',
    time: '12 hours ago',
    status: 'Active',
    details: 'Social media mentions up 120%',
    confidence: 89,
  },
  {
    id: 5,
    type: 'Medium',
    title: 'Malaria Risk Elevated',
    location: 'Powai Area',
    time: '18 hours ago',
    status: 'Monitoring',
    details: 'Monsoon water logging detected',
    confidence: 75,
  },
  {
    id: 6,
    type: 'Low',
    title: 'Gastroenteritis Alert',
    location: 'Goregaon Area',
    time: '1 day ago',
    status: 'Resolved',
    details: 'Water quality improved, risk decreasing',
    confidence: 68,
  },
  {
    id: 7,
    type: 'Medium',
    title: 'Heat Wave Warning',
    location: 'Thane Area',
    time: '1 day ago',
    status: 'Monitoring',
    details: 'Temperature expected to rise above 38°C',
    confidence: 82,
  },
  {
    id: 8,
    type: 'Low',
    title: 'Seasonal Allergies',
    location: 'Kandivali Area',
    time: '2 days ago',
    status: 'Resolved',
    details: 'Pollen count normalized',
    confidence: 71,
  },
];

export function ViewAllAlertsModal({ open, onOpenChange }: ViewAllAlertsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-red-500/5 to-orange-500/5 pointer-events-none"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          style={{ backgroundSize: "200% 200%" }}
        />

        <DialogHeader className="relative z-10">
          <DialogTitle className="flex items-center gap-2">
            <motion.div
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-red-500 flex items-center justify-center shadow-lg"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(245, 158, 11, 0)",
                  "0 0 0 8px rgba(245, 158, 11, 0.1)",
                  "0 0 0 0 rgba(245, 158, 11, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <AlertTriangle className="w-5 h-5 text-white" />
            </motion.div>
            <span>All Active Alerts</span>
          </DialogTitle>
          <DialogDescription>
            Complete list of health alerts across Mumbai regions
          </DialogDescription>
        </DialogHeader>

        <div className="relative z-10 overflow-y-auto max-h-[60vh] pr-2">
          <div className="space-y-4">
            {allAlerts.map((alert, index) => (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-4 rounded-lg border border-gray-200 hover:border-sky-300 transition-colors bg-white hover:shadow-md group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <AlertTriangle
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        alert.type === 'High'
                          ? 'text-red-500'
                          : alert.type === 'Medium'
                          ? 'text-amber-500'
                          : 'text-gray-500'
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-sm text-gray-900">{alert.title}</span>
                        <Badge
                          variant="outline"
                          className={`flex-shrink-0 text-xs ${
                            alert.status === 'Active'
                              ? 'border-red-200 text-red-600 bg-red-50'
                              : alert.status === 'Monitoring'
                              ? 'border-amber-200 text-amber-600 bg-amber-50'
                              : 'border-emerald-200 text-emerald-600 bg-emerald-50'
                          }`}
                        >
                          {alert.status}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={`flex-shrink-0 text-xs ${
                            alert.type === 'High'
                              ? 'border-red-200 text-red-600'
                              : alert.type === 'Medium'
                              ? 'border-amber-200 text-amber-600'
                              : 'border-gray-200 text-gray-600'
                          }`}
                        >
                          {alert.type} Priority
                        </Badge>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-2 flex-wrap">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {alert.location}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {alert.time}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{alert.details}</p>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-3 h-3 text-sky-500" />
                        <span className="text-xs text-gray-500">Confidence:</span>
                        <div className="flex-1 max-w-xs h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-sky-500 to-emerald-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${alert.confidence}%` }}
                            transition={{ duration: 1, delay: index * 0.05 }}
                          />
                        </div>
                        <span className="text-xs text-gray-700">{alert.confidence}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
