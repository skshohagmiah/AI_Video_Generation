import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Headphones, Layers, MessageSquare, PlayCircle, Upload, Video } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { WorkflowStep } from "@/components/workflow-step"

export const metadata: Metadata = {
  title: "Workflow | AI Video Generation Platform",
  description: "Manage your AI video generation workflow",
}

export default function WorkflowPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Video Generation Workflow" text="Manage and monitor your AI video generation process.">
        <Button>
          <PlayCircle className="mr-2 h-4 w-4" />
          New Video Project
        </Button>
      </DashboardHeader>
      <Tabs defaultValue="script" className="space-y-4">
        <TabsList className="grid grid-cols-6 h-auto">
          <TabsTrigger value="script" className="flex flex-col py-2 h-auto">
            <FileText className="h-4 w-4 mb-1" />
            <span className="text-xs">Script</span>
          </TabsTrigger>
          <TabsTrigger value="tts" className="flex flex-col py-2 h-auto">
            <Headphones className="h-4 w-4 mb-1" />
            <span className="text-xs">TTS</span>
          </TabsTrigger>
          <TabsTrigger value="video" className="flex flex-col py-2 h-auto">
            <Video className="h-4 w-4 mb-1" />
            <span className="text-xs">Video</span>
          </TabsTrigger>
          <TabsTrigger value="editing" className="flex flex-col py-2 h-auto">
            <Layers className="h-4 w-4 mb-1" />
            <span className="text-xs">Editing</span>
          </TabsTrigger>
          <TabsTrigger value="subtitles" className="flex flex-col py-2 h-auto">
            <MessageSquare className="h-4 w-4 mb-1" />
            <span className="text-xs">Subtitles</span>
          </TabsTrigger>
          <TabsTrigger value="upload" className="flex flex-col py-2 h-auto">
            <Upload className="h-4 w-4 mb-1" />
            <span className="text-xs">Upload</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="script">
          <WorkflowStep
            title="Script Generation"
            description="AI writes scripts based on selected topics"
            icon={FileText}
            model="LLaMA 3 / Mistral / GPT-J"
          >
            <Card>
              <CardHeader>
                <CardTitle>Script Settings</CardTitle>
                <CardDescription>Configure how the AI generates your video script</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  {/* Script generation settings would go here */}
                  <div className="h-[400px] flex items-center justify-center">
                    <div className="text-center">
                      <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-medium">Script Generation</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Configure AI models, topics, and script parameters here.
                      </p>
                      <Button className="mt-4">Generate Script</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </WorkflowStep>
        </TabsContent>

        <TabsContent value="tts">
          <WorkflowStep
            title="Text-to-Speech (TTS)"
            description="AI-generated voice narrates the script"
            icon={Headphones}
            model="Tortoise-TTS / Coqui-TTS"
          >
            <Card>
              <CardHeader>
                <CardTitle>Voice Settings</CardTitle>
                <CardDescription>Configure the AI voice for your video narration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  {/* TTS settings would go here */}
                  <div className="h-[400px] flex items-center justify-center">
                    <div className="text-center">
                      <Headphones className="mx-auto h-12 w-12 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-medium">Text-to-Speech</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Configure voice type, accent, speed, and tone here.
                      </p>
                      <Button className="mt-4">Generate Voice</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </WorkflowStep>
        </TabsContent>

        <TabsContent value="video">
          <WorkflowStep
            title="Video Generation"
            description="AI creates video clips from text-based prompts"
            icon={Video}
            model="Stable Video Diffusion / ModelScope"
          >
            <Card>
              <CardHeader>
                <CardTitle>Video Settings</CardTitle>
                <CardDescription>Configure how the AI generates video clips</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  {/* Video generation settings would go here */}
                  <div className="h-[400px] flex items-center justify-center">
                    <div className="text-center">
                      <Video className="mx-auto h-12 w-12 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-medium">Video Generation</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Configure video style, resolution, and visual elements here.
                      </p>
                      <Button className="mt-4">Generate Video</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </WorkflowStep>
        </TabsContent>

        <TabsContent value="editing">
          <WorkflowStep
            title="Video Editing"
            description="AI merges clips, adds voiceovers & background music"
            icon={Layers}
            model="FFmpeg"
          >
            <Card>
              <CardHeader>
                <CardTitle>Editing Settings</CardTitle>
                <CardDescription>Configure how the AI edits your video</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  {/* Video editing settings would go here */}
                  <div className="h-[400px] flex items-center justify-center">
                    <div className="text-center">
                      <Layers className="mx-auto h-12 w-12 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-medium">Video Editing</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Configure transitions, effects, and background music here.
                      </p>
                      <Button className="mt-4">Edit Video</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </WorkflowStep>
        </TabsContent>

        <TabsContent value="subtitles">
          <WorkflowStep
            title="Subtitles Generation"
            description="AI auto-generates & embeds subtitles"
            icon={MessageSquare}
            model="OpenAI Whisper"
          >
            <Card>
              <CardHeader>
                <CardTitle>Subtitle Settings</CardTitle>
                <CardDescription>Configure how the AI generates subtitles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  {/* Subtitle settings would go here */}
                  <div className="h-[400px] flex items-center justify-center">
                    <div className="text-center">
                      <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-medium">Subtitles Generation</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Configure subtitle style, language, and positioning here.
                      </p>
                      <Button className="mt-4">Generate Subtitles</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </WorkflowStep>
        </TabsContent>

        <TabsContent value="upload">
          <WorkflowStep
            title="Auto-Upload"
            description="AI posts videos to YouTube & Facebook"
            icon={Upload}
            model="YouTube API / Facebook API"
          >
            <Card>
              <CardHeader>
                <CardTitle>Upload Settings</CardTitle>
                <CardDescription>Configure how the AI uploads your videos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  {/* Upload settings would go here */}
                  <div className="h-[400px] flex items-center justify-center">
                    <div className="text-center">
                      <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-medium">Auto-Upload</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Configure platform settings, scheduling, and metadata here.
                      </p>
                      <Button className="mt-4">Upload Video</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </WorkflowStep>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

