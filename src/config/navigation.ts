/**
 * Section anchors used for in-page navigation.
 * Every `#hash` link in the app must be built from these IDs.
 */
export const SECTION_IDS = {
    hero: "hero",
    journey: "journey",
    projects: "projects",
    skills: "skills",
    blogs: "blogs",
    contact: "contact",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

/** Builds an in-page anchor href for a section, e.g. `#projects`. */
export const sectionHref = (id: SectionId) => `#${id}` as const;

export interface NavItem {
    label: string;
    sectionId: SectionId;
}

export const NAV_ITEMS: readonly NavItem[] = [
    { label: "Home", sectionId: SECTION_IDS.hero },
    { label: "Journey", sectionId: SECTION_IDS.journey },
    { label: "Work", sectionId: SECTION_IDS.projects },
    { label: "Contact", sectionId: SECTION_IDS.contact },
];
