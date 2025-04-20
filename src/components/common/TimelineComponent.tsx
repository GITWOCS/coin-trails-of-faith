
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  coinIds?: string[];
}

interface TimelineComponentProps {
  events: TimelineEvent[];
  onEventClick?: (eventId: string) => void;
}

const TimelineComponent = ({ events, onEventClick }: TimelineComponentProps) => {
  const [activeEvent, setActiveEvent] = useState<string | null>(
    events[0]?.id || null
  );

  const handleEventClick = (eventId: string) => {
    setActiveEvent(eventId);
    if (onEventClick) {
      onEventClick(eventId);
    }
  };

  return (
    <div className="relative w-full py-10">
      {/* Timeline Line */}
      <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gold transform -translate-x-1/2" />

      {/* Events */}
      <div className="relative">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={cn(
              "flex items-center mb-12 last:mb-0",
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            )}
          >
            {/* Content */}
            <div className="w-5/12">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md",
                  activeEvent === event.id && "ring-2 ring-gold"
                )}
                onClick={() => handleEventClick(event.id)}
              >
                <h4 className="text-xl font-medieval mb-2">{event.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{event.year}</p>
                <p className="text-sm">{event.description}</p>
              </motion.div>
            </div>

            {/* Center Dot */}
            <div className="w-2/12 flex justify-center relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                className={cn(
                  "w-5 h-5 rounded-full border-4 cursor-pointer",
                  activeEvent === event.id
                    ? "bg-gold border-gold-dark"
                    : "bg-white border-gold"
                )}
                onClick={() => handleEventClick(event.id)}
              />
              <div
                className={cn(
                  "absolute top-1/2 transform -translate-y-1/2 text-sm font-medieval font-bold",
                  index % 2 === 0 ? "left-8" : "right-8"
                )}
              >
                {event.year}
              </div>
            </div>

            {/* Empty space for alignment */}
            <div className="w-5/12" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineComponent;
