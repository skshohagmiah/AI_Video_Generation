import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface WorkflowStepProps {
  title: string
  description: string
  icon: LucideIcon
  model: string
  children: React.ReactNode
}

export function WorkflowStep({ title, description, icon: Icon, model, children }: WorkflowStepProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="col-span-1">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Icon className="h-5 w-5" />
              <CardTitle>{title}</CardTitle>
            </div>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium">AI Model</h4>
                <p className="text-sm text-muted-foreground">{model}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium">Process</h4>
                <p className="text-sm text-muted-foreground">This step uses AI to {description.toLowerCase()}.</p>
              </div>
              <div>
                <h4 className="text-sm font-medium">Estimated Time</h4>
                <p className="text-sm text-muted-foreground">2-5 minutes depending on content length</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-1 md:col-span-1 lg:col-span-2">{children}</div>
    </div>
  )
}

