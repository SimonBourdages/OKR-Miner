# OKR Miner Improvements

## Implemented in this update

0. **Building hitbox and collision consistency fix**
   - Added level-aware node hitbox sizing so interaction/collision bounds scale with upgraded visuals.
   - Placement reservation now uses combined hitboxes, preventing overlap with upgraded buildings.
   - Upgrade collision resolution now applies to all buildings intersecting the upgraded node's collision radius.
   - When merge conditions are met, upgraded node promotes to Lv.4 first, then consumes/destroys all overlapping buildings.

1. **Shared gameplay logic module (`src/game-logic.js`)**
   - Extracted deterministic mechanics from `index.html` into reusable pure functions.
   - Centralized upgrade, production, milestone, and number-format logic to reduce drift.

2. **Automated test suite (Vitest)**
   - Added unit/integration-style tests for:
     - production math
     - underfunded behavior
     - multiplier scaling
     - GPU capacity gating
     - funding cap math
     - milestone unlock mutation logic
     - number formatting and upgrade/refund formulas

3. **Runtime optimization**
   - Removed duplicate MST computation per frame by sharing one edge computation between:
     - resource flow updates
     - draw connection rendering
   - Moved core production math into a single deterministic snapshot computation path.

4. **CI enforcement for mainline changes**
   - Added `.github/workflows/test.yml` to run `npm ci` + `npm test` on:
     - pushes to `main`
     - pull requests targeting `main`

5. **Offline cache alignment**
   - Updated service worker cache list/version to include the new `src/game-logic.js` asset.

6. **Competitor raid cinematic introduction**
   - Added a new autoplay cinematic (`spaceship-resource-raid-video.mp4`) that triggers once when the first competitor ship appears.
   - Wired it into the shared managed-video flow so gameplay auto-pauses during playback and resumes with the same countdown UX used by upgrade cinematics.

7. **Debug-level bootstrap mode**
   - Added a menu debug flow that lets you choose a starting level before launching.
   - Debug starts now generate an optimized pre-placed building layout for the selected level.
   - Debug runs begin with +999,999 HC and +999,999 $ to accelerate scenario testing.
   - Added an extra +1,000,000 $ on top of debug starting funds and a +1,000,000 debug-only funding cap boost.

8. **Robot uprising AI betrayal behavior**
   - During Humans First robot uprising, existing AI buildings now visibly attack non-AI buildings instead of only abstract random hits.
   - When only AI buildings remain, leadership KR reserves are explicitly siphoned with dedicated warning feedback.

9. **Menu-visible persistent achievements**
   - Added Achievements access directly from the main menu.
   - Achievement unlocks now persist in dedicated browser localStorage and are merged with save/load data so progress survives sessions.

10. **Finances economy and base funding cap rebalance**
   - Increased Finances building funding output from `+5 $/s` to `+15 $/s` (3x), scaling all upgrade levels accordingly.
   - Raised the default starting funding cap to `1,000,000 $` in shared funding-cap logic.

11. **Achievement reset support**
   - Added a Reset Achievements action directly inside the achievements panel.
   - Reset now clears browser-persistent achievements and removes achievement unlocks from local save payloads.

12. **Menu intro polish and minimap visibility toggle**
   - Minimap rendering is now disabled behind a `MINIMAP_ENABLED` flag while keeping the full minimap drawing code for future re-enable.
   - Menu background now keeps the intro video element and shows the intro's first frame as a static background layer.
   - Intro overlay title/button styling is aligned with the main menu font sizing and color scheme.

13. **Version timestamp timezone consistency**
   - Menu version tag now formats build time from UTC into Pacific time using timezone-aware formatting.
   - Added a fallback formatter that still outputs a PST timestamp if Intl timezone formatting is unavailable.

14. **Story branch and event atlas documentation**
   - Added a standalone `story-branches-events.html` page that maps objective reviews, unlocks, and branch triggers.
   - Included the full random event catalog (100 events) with filtering and grouped by negative/positive/neutral pools.
   - Added a README link so players can quickly open the story/event path guide.

15. **Starting HC baseline adjustment**
   - Raised the default new-game starting HC from `50` to `101`.
   - Aligned the HUD default value and debug-state base HC seed with the same starting baseline.

16. **VPN achievement wording update**
   - Updated the VPN Enabled achievement description to report reduced packet loss instead of particle flow wording.

17. **Network Hub branch amplification**
   - Connection-edge generation now adds one extra direct Leadership branch per Network Hub.
   - Extra branches target the next closest buildings first to increase visible network branching.

18. **Robot uprising AI strike escalation**
   - Added visible AI laser-shot VFX from attacking AI buildings to their targets during Humans First robot uprising.
   - AI strike hits now instantly destroy targeted non-AI buildings, accelerating collapse in the no-equal-rights branch.

## Recommended next optimization passes

1. **Spatial partitioning for proximity checks**
   - Replace broad node distance scans in collision/interaction paths with a grid hash.

2. **Object pooling for short-lived particles/trails**
   - Reduce GC churn in high-intensity moments with many particles and ship trails.

3. **Selective UI refresh**
   - Throttle or diff-check HUD updates to skip unchanged DOM writes on busy frames.

4. **Event effect batching**
   - Standardize event damage/buff handling through compact batch operations for maintainability.
