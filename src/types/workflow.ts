import { z } from "zod";
import { uniqueById } from "./shared";

/** Percentage (0–100) used to position nodes inside the diagram canvas. */
const Percent = z.number().min(0).max(100);

export const WorkflowNodeSchema = z.object({
    id: z.string().min(1),
    /** Short text rendered inside the node box, e.g. "API". */
    label: z.string().min(1),
    /** Caption rendered below the node, e.g. "ENRICH". */
    caption: z.string().min(1),
    position: z.object({ x: Percent, y: Percent }),
    /** Visually emphasised node (the "AI" step). */
    highlighted: z.boolean().default(false),
    details: z.object({
        title: z.string().min(1),
        text: z.string().min(1),
    }),
});

export const WorkflowEdgeSchema = z.object({
    from: z.string().min(1),
    to: z.string().min(1),
});

export const WorkflowGraphSchema = z
    .object({
        nodes: uniqueById(WorkflowNodeSchema).min(1),
        edges: z.array(WorkflowEdgeSchema),
    })
    .superRefine(({ nodes, edges }, ctx) => {
        const ids = new Set(nodes.map((node) => node.id));
        edges.forEach((edge, index) => {
            for (const end of ["from", "to"] as const) {
                if (!ids.has(edge[end])) {
                    ctx.addIssue({
                        code: "custom",
                        message: `Edge references unknown node "${edge[end]}"`,
                        path: ["edges", index, end],
                    });
                }
            }
        });
    });

export type WorkflowNode = z.infer<typeof WorkflowNodeSchema>;
export type WorkflowEdge = z.infer<typeof WorkflowEdgeSchema>;
export type WorkflowGraph = z.infer<typeof WorkflowGraphSchema>;
/** Input shape (before defaults are applied) — used when authoring content. */
export type WorkflowGraphInput = z.input<typeof WorkflowGraphSchema>;
