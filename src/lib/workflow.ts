import type { WorkflowGraph } from "@/types";

/** A straight line between two nodes, in canvas percentages (0–100). */
export interface EdgeSegment {
    id: string;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}

/** Converts graph edges into line segments using the connected nodes' positions. */
export function toEdgeSegments({ nodes, edges }: WorkflowGraph): EdgeSegment[] {
    const positions = new Map(nodes.map((node) => [node.id, node.position]));

    return edges.map(({ from, to }) => {
        const start = positions.get(from);
        const end = positions.get(to);
        if (!start || !end) {
            throw new Error(`Workflow edge "${from}" → "${to}" references an unknown node`);
        }
        return { id: `${from}->${to}`, x1: start.x, y1: start.y, x2: end.x, y2: end.y };
    });
}

/** Formats a canvas coordinate for CSS/SVG, e.g. `15` → `"15%"`. */
export const toPercent = (value: number) => `${value}%` as const;
