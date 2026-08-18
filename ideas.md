# Technical Aluminium: Design Direction

## Design Read

> Reading this as: **a premium architectural-fabrication landing page** for **homeowners, architects, and commercial contractors**, with a **precise, material-led, confident** language, leaning toward **contemporary industrial editorial design**.

**Design dials:** `DESIGN_VARIANCE: 8` · `MOTION_INTENSITY: 6` · `VISUAL_DENSITY: 4`

## Three directions considered

| Theme Name | Very Brief Intro | Probability |
| --- | --- | ---: |
| Sunlit Blueprint | A pale, measured, drawing-room direction that makes technical specification feel warm and human. | 0.07 |
| Anodised Standard | A mineral, high-contrast editorial system inspired by aluminium surfaces, measured joints, and the black/yellow identity already present in the business profile. | 0.04 |
| Glasshouse Workshop | A tactile, photographed workshop language with naturally lit glazing and deep green framing. | 0.09 |

## Selected direction: Anodised Standard

### Design Movement

Contemporary industrial editorial design, translated through the material vocabulary of **architectural aluminium**. It borrows the discipline of technical drawings, anodised metal and framing profiles without turning the interface into a faux engineering dashboard.

### Core Principles

1. **Material truth over decoration:** aluminium, glass, shadow lines and daylight are the visual sources.
2. **Measured asymmetry:** large type and generous negative space are balanced by a narrow specification rail and modular frame motifs.
3. **Yellow as a signal, not a fill:** the existing warm yellow appears where action, progress and emphasis genuinely matter.
4. **Composed movement:** reveal effects behave like panels being set into a frame; interaction is quiet and deliberate.

### Compact Token System

| Token | Value | Role |
| --- | --- | --- |
| Graphite | `#121416` | Primary dark surface and type anchor |
| Alloy | `#C8CED0` | Aluminium details, hairlines and secondary labels |
| Frost | `#F2F1EC` | Daylit light surface |
| Signal Yellow | `#F3B817` | Brand signal, CTA and performance visualisation |
| Safety Green | `#2FC276` | Availability and enquiry feedback |
| Blue Steel | `#145D7E` | Controlled secondary technical note |

**Type:** `Space Grotesk` is the compact geometric display face; `DM Sans` provides readability in body copy; `IBM Plex Mono` is reserved for dimensions, navigation and data labels.

### Color Philosophy

The palette puts **warm daylight and dark workshop graphite** into conversation. Signal Yellow is retained from the supplied business identity but used precisely, resembling a safety mark on a fabricated component rather than a generic energetic accent. Alloy grey makes dimensions and framing feel structural, while blue steel appears only for measured technical context.

### Layout Paradigm

The page is arranged as a series of **architectural elevations** rather than a central stack of cards. A permanent thin vertical measurement rail opens the desktop hero; sections alternate between full-bleed planes, offset media slabs and low horizontal specification bands. At narrow widths, the rail resolves into a top rule and all visual hierarchy persists without pinned mechanics.

```text
DESKTOP
┌───────────── measurement rail ───────────────┬────────────────────────────┐
│ scale / service tags                          │ Hero statement + framed view│
├───────────────────────────────────────────────┼────────────────────────────┤
│ Project gallery, offset left                  │ Capabilities, offset right  │
├───────────────────────────────────────────────┴────────────────────────────┤
│ Availability + lead-time rhythm (area profile)                            │
└───────────────────────────────────────────────────────────────────────────┘
```

### Signature Elements

1. **The Frame Cut:** paired fine rules, mitred corner tabs and inset labels repeatedly outline important content as though it is being set into an aluminium extrusion.
2. **Daylight Apertures:** tall image crops appear as openings within the graphic system, connecting the fabrication promise to an architectural result.
3. **Lead-time Profile:** a restrained yellow area profile is a live-looking visual metaphor for production planning, explicitly labelled as an illustrative scheduling rhythm rather than a performance claim.

### Interaction Philosophy

Interaction should feel like operating well-made hardware: buttons compress by a pixel, tiles open with a short directional shift, and details acquire a hairline instead of a loud glow. The project gallery has descriptive hover labels; calls and enquiry actions remain straightforward links with clear focus states.

### Animation

The hero has one orchestrated entrance: type settles up in short offsets while the glass aperture uncovers behind it. Each subsequent meaningful group uses a single opacity-and-translate reveal, never an animation on every child. Gallery items shift gently on hover; the production profile draws once on entry. All nonessential transforms are disabled under reduced motion.

### Typography System

The display headline uses `Space Grotesk` at tight tracking, 700 weight and a compact line-height. `DM Sans` carries short supportive paragraphs at an open reading rhythm. `IBM Plex Mono` in upper-case, expanded tracking marks dimensions, service labels and the chart legend. Headlines are sentence case, direct and free of generic sales filler.

### Brand Essence

**Technical Aluminium fabricates clear, resilient architectural openings for projects that demand a clean finish and dependable installation.**

**Personality:** Exacting, grounded, forward-looking.

### Brand Voice

Headlines are compact, active and material-specific. CTAs use decisive verbs. Microcopy favours useful commitments over vague claims.

> “Open the building to better light.”

> “Bring your drawing. We will build the frame.”

### Wordmark & Logo

The brand mark is an **abstract mitred corner**: two overlapping aluminium profile lines form a strong, open square with a small yellow inset. It signifies a precisely fabricated opening, works without text, and supplies the favicon.

### Signature Brand Color

**Signal Yellow `#F3B817`** is the ownable technical signal that carries the action language throughout the site.

## Uniqueness review

The design deliberately avoids the generic dark-mesh hero and identikit feature-card layout. The visual language comes from real fabrication: profile lines, mitred joins, framed daylight and fabrication scheduling. The distinctive Frame Cut signature replaces decoration-first motifs, while the chart remains a purposeful scheduling metaphor rather than dashboard ornament.

## Style Decisions

- **Blue Steel `#145D7E` is a technical drawing note, not the emotional surface.** It will appear only in thin diagram layers, labels and small measured details; graphite, frost and Signal Yellow carry the brand hierarchy.
- **Each major section must reveal one Frame Cut cue.** Paired hairlines, mitred corners, inset labels and measurement rails turn broad content planes into fabricated architectural elevations.
- **Photography remains material-forward.** Framing profiles, glazing edges, fabrication hands, shadow lines and daylight openings lead every visual selection and caption.
