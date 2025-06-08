# 🛑 ¿Qué es la Arquitectura Hexagonal?

La arquitectura hexagonal es una forma de organizar el código en nuestras aplicaciones, dividiéndolo en tres capas principales:

---

## 🧩 Capas principales

```
        ┌─────────────────────────────┐
        │        Infraestructura     │
        │   (BBDD, controladores,    │
        │    rutas, servicios, etc.) │
        └─────────────▲──────────────┘
                      │
        ┌─────────────┴──────────────┐
        │        Aplicación          │
        │   (Casos de uso, lógica   │
        │    de orquestación)       │
        └─────────────▲──────────────┘
                      │
        ┌─────────────┴──────────────┐
        │         Dominio            │
        │ (Entidades, reglas de      │
        │  negocio, eventos, etc.)   │
        └────────────────────────────┘
```

---

## 🏛️ 1. Dominio

- ⚙️ Lógica de negocio: entidades, excepciones, eventos, servicios reutilizables.
- 🔒 Solo puede interactuar con elementos de la propia capa de dominio.

## 🧠 2. Aplicación

- 📦 Casos de uso (por ejemplo, cómo se envían emails).
- 🧭 Orquesta la lógica de negocio definida en el dominio.
- 🚫 Puede interactuar con la capa de aplicación y dominio, pero nunca con infraestructura.

## 🏗️ 3. Infraestructura

- 🗄️ Acoplamientos externos: bases de datos, controladores, rutas, servicios externos, etc.
- 🔄 Puede interactuar con cualquier capa (infraestructura, aplicación o dominio).

---

## 📏 Regla de Dependencia

- Las capas más internas nunca deben depender de las más externas.
- La comunicación siempre va de fuera hacia dentro, nunca al revés.

| Capa               | Puede interactuar con...             |
| ------------------ | ------------------------------------ |
| 🏗️ Infraestructura | Infraestructura, Aplicación, Dominio |
| 🧠 Aplicación      | Aplicación, Dominio                  |
| 🏛️ Dominio         | Dominio                              |

---

## 💳 Ejemplo en este repositorio

En este repositorio se implementa un sistema de pagos donde se podrán:

- ➕ Crear pagos
- 📋 Listar pagos

---

✨ ¡Explora el código para ver cómo se aplica la arquitectura hexagonal en la práctica!
