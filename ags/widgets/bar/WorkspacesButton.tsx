import { createBinding, createState, For } from "gnim"
import AstalHyprland from "gi://AstalHyprland?version=0.1"

export function Workspaces() {
  const hypr = AstalHyprland.get_default()
  const [wsList, setWsList] = createState(hypr.get_workspaces())

  hypr.connect("workspace-added", (_, ws) => {
    setWsList((w) => [...w, ws])
  })
  hypr.connect("workspace-removed", (_, wsId) => {
    setWsList((w) => w.filter((w) => w.id != wsId))
  })

  const sorted = (arr: Array<AstalHyprland.Workspace>) => {
    return arr.sort((a, b) => a.id - b.id)
  }

  return (
    <box class="Workspaces">
      <For each={wsList(sorted)}>
        {(ws: AstalHyprland.Workspace) => (
          <button
            class={createBinding(hypr, "focusedWorkspace").as((fw) =>
              ws === fw ? "focused" : ""
            )}
            onClicked={() => ws.focus()}
          >
            {ws.id}
          </button>
        )}
      </For>
    </box>
  )
}
