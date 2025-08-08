## 💾 Code Style Guide — NacatamalOn

This engine uses different naming conventions depending on the language and layer, to preserve idiomatic style while ensuring clarity and maintainability.

---

### 📁 Folder and File Naming

- Use **lowercase\_with\_underscores** for all folder and file names.
  - ✅ `game_core/`, `render_pipeline/`
  - ✅ `sprite_utils.ts`, `vector_math.rs`
- This is inspired by the Rust ecosystem and helps keep consistency across languages.

---

### 🗾️ TypeScript Code Style (Public API and Internal)

Follows idiomatic JavaScript/TypeScript conventions:

| Element              | Style                  | Example                           |
| -------------------- | ---------------------- | --------------------------------- |
| Functions & methods  | `camelCase`            | `loadTexture()`, `createSprite()` |
| Variables            | `camelCase`            | `gameLoop`, `maxPlayers`          |
| Classes & types      | `PascalCase`           | `SceneManager`, `Vector2D`        |
| Constants (optional) | `SCREAMING_SNAKE_CASE` | `MAX_TEXTURES`                    |

- Keep consistency across both public and internal code.
- Avoid mixing `snake_case` in TypeScript, even for private/internal code.

---

### 🦀 Rust Code Style

Follows standard Rust conventions:

| Element               | Style                  | Example                          |
| --------------------- | ---------------------- | -------------------------------- |
| Functions & variables | `snake_case`           | `load_texture()`, `sprite_count` |
| Structs & Enums       | `CamelCase`            | `RenderContext`, `GameState`     |
| Constants             | `SCREAMING_SNAKE_CASE` | `MAX_ENTITIES`                   |

- Used for the core rendering backend or systems written in Rust.

---

### ⚙️ Zig Code Style (if used)

- Zig also uses **snake\_case** for functions and variables, and **CamelCase** for types and structs.
- The convention matches Rust, so consistency between both is easy.

---

### 🧹 Language Boundary (FFI / WASM)

When exposing Rust/Zig to TypeScript:

- Bindings should adapt naming to **TypeScript conventions** (`camelCase`).
- For example:
  ```ts
  // Rust: pub fn get_frame_time() -> f32
  // TS Binding: engine.getFrameTime()
  ```

---

### 📌 Summary

| Layer             | Style Used                   |
| ----------------- | ---------------------------- |
| Folder/File names | `lowercase_with_underscores` |
| TypeScript API    | `camelCase`, `PascalCase`    |
| Rust core         | `snake_case`, `CamelCase`    |
| Zig core          | `snake_case`, `CamelCase`    |

