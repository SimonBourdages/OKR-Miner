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

## Recommended next optimization passes

1. **Spatial partitioning for proximity checks**
   - Replace broad node distance scans in collision/interaction paths with a grid hash.

2. **Object pooling for short-lived particles/trails**
   - Reduce GC churn in high-intensity moments with many particles and ship trails.

3. **Selective UI refresh**
   - Throttle or diff-check HUD updates to skip unchanged DOM writes on busy frames.

4. **Event effect batching**
   - Standardize event damage/buff handling through compact batch operations for maintainability.
