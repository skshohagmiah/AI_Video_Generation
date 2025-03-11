"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { FileText, Headphones, Layers, MessageSquare, Pause, Play, Upload, Video } from "lucide-react"

const steps = [
  {
    id: "script",
    name: "Script Generation",
    icon: FileText,
    progress: 100,
    status: "completed",
  },
  {
    id: "tts",
    name: "Text-to-Speech",
    icon: Headphones,
    progress: 100,
    status: "completed",
  },
  {
    id: "video",
    name: "Video Generation",
    icon: Video,
    progress: 75,
    status: "in-progress",
  },
  {
    id: "editing",
    name: "Video Editing",
    icon: Layers,
    progress: 0,
    status: "pending",
  },
  {
    id: "subtitles",
    name: "Subtitles",
    icon: MessageSquare,
    progress: 0,
    status: "pending",
  },
  {
    id: "upload",
    name: "Auto-Upload",
    icon: Upload,
    progress: 0,
    status: "pending",
  },
]

export function VideoGenerationProgress() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between bg-muted/40 p-3 rounded-lg border">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <h3 className="font-medium">Top 10 AI Tools for 2025</h3>
          </div>
          <p className="text-sm text-muted-foreground">Tech niche • 8:24 estimated duration</p>
        </div>
        <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setIsPaused(!isPaused)}>
          {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
        </Button>
      </div>

      <div className="space-y-4">
        {steps.map((step) => (
          <div key={step.id} className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <step.icon
                  className={`h-4 w-4 ${
                    step.status === "completed"
                      ? "text-green-500"
                      : step.status === "in-progress"
                        ? "text-primary"
                        : "text-muted-foreground"
                  }`}
                />
                <span
                  className={`text-sm font-medium ${
                    step.status === "completed"
                      ? "text-green-500"
                      : step.status === "in-progress"
                        ? "text-primary"
                        : "text-muted-foreground"
                  }`}
                >
                  {step.name}
                </span>
              </div>
              <Badge
                variant={
                  step.status === "completed" ? "default" : step.status === "in-progress" ? "outline" : "secondary"
                }
                className={
                  step.status === "completed"
                    ? "bg-green-500 hover:bg-green-500/90"
                    : step.status === "in-progress"
                      ? "border-primary text-primary"
                      : ""
                }
              >
                {step.status === "completed" ? "Completed" : step.status === "in-progress" ? "In Progress" : "Pending"}
              </Badge>
            </div>
            <Progress
              value={step.progress}
              className={`h-1.5 ${step.status === "completed" ? "bg-muted" : "bg-muted/50"}`}
              indicatorClassName={step.status === "completed" ? "bg-green-500" : "bg-primary"}
            />
            {step.status === "in-progress" && (
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Generating video clips: 15/20</span>
                <span>75%</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

