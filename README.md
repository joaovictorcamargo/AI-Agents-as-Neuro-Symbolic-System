# AI Agents as Neuro-Symbolic Systems

<img width="1347" alt="Screenshot 2024-11-23 at 09 08 41" src="https://github.com/user-attachments/assets/22b6f910-9af8-4ada-8ed5-200d7f5522e2">

<img width="1344" alt="Screenshot 2024-11-23 at 09 08 49" src="https://github.com/user-attachments/assets/fb1e8d4e-d226-492d-83c6-1619b5a63a90">



This repository demonstrates the concept of **AI agents** defined as **neuro-symbolic systems**, inspired by the early LLM agent paper MRKL. It integrates neural network-based pattern recognition with symbolic reasoning to create AI agents capable of logical decision-making. Below, you will find the reasoning behind adopting the "neuro-symbolic system" definition for AI agents and an explanation of the project's architecture.

---

## Table of Contents

- [Introduction](#introduction)
- [Neuro-Symbolic System Definition](#neuro-symbolic-system-definition)
- [Project Overview](#project-overview)
- [Features](#features)
- [How It Works](#how-it-works)
- [Setup and Usage](#setup-and-usage)
- [Screenshots](#screenshots)
- [Future Plans](#future-plans)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction

This project explores AI agents through the lens of **neuro-symbolic systems**, a concept that merges two paradigms:
1. Neural networks for pattern recognition.
2. Symbolic reasoning for logical decision-making.

By combining these paradigms, the system can not only "see" or "perceive" but also "reason" through a set of predefined logical rules. This aligns with the neuro-symbolic definition described in the MRKL paper, which suggests a hybrid approach to building intelligent systems.

---

## Neuro-Symbolic System Definition

A neuro-symbolic system combines:
- **Neural Pattern Recognition**: Extracts meaningful patterns from raw inputs (e.g., recognizing objects in images).
- **Symbolic Reasoning Engine**: Applies logical rules to recognized patterns for decision-making (e.g., stop when detecting a "Stop Sign").

This hybrid model empowers AI agents to:
- Adapt to complex environments using learned patterns.
- Make decisions based on rules that reflect domain-specific logic.

---

## Project Overview

The project implements a **neuro-symbolic AI system** to simulate an autonomous agent, showcasing its decision-making process. It includes:
1. A **Neural Pattern Recognition Module** for object detection.
2. A **Symbolic Reasoning Engine** that applies logical rules to these patterns to decide on actions.
3. A **Final Decision Output** illustrating how the system integrates both paradigms.

---

## Features

- **Neural Pattern Recognition**:
  - Simulates neural networks detecting objects in an environment.
  - Example: Recognizes traffic lights, stop signs, pedestrians, and cars.

- **Symbolic Reasoning Engine**:
  - Applies logical rules to patterns detected by the neural component.
  - Example Rules:
    - `IF traffic_light → THEN check_light_color`
    - `IF stop_sign → THEN stop_vehicle`
    - `IF pedestrian → THEN reduce_speed`

- **Dynamic Decision-Making**:
  - Combines the neural and symbolic outputs to decide on the most appropriate action.
  - Outputs confidence levels and reasoning behind the final decision.

---

## How It Works

The system operates in three stages:
1. **Pattern Recognition**:
   - The neural component identifies objects in the environment.
2. **Reasoning**:
   - The symbolic reasoning engine evaluates the recognized objects against active logical rules.
3. **Decision Output**:
   - The system integrates both paradigms to produce an actionable decision with a confidence level.

**Example Flow**:
- Input: Image containing a "Stop Sign".
- Neural Output: Recognizes "Stop Sign".
- Reasoning: Applies rule `IF stop_sign → THEN stop_vehicle`.
- Decision: `Action: stop_vehicle | Confidence: 91%`.

---

## Setup and Usage

### Prerequisites
- Node.js (version 16 or higher)
- A modern web browser

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/neuro-symbolic-ai-system.git
   ```
2. Navigate to the project folder:
   ```bash
   cd neuro-symbolic-ai-system
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open the application in your browser at `http://localhost:3000`.

---

## Screenshots

### Neuro-Symbolic AI System Overview
![Neuro-Symbolic Overview](./images/Screenshot-Overview.png)

### Final Decision
![Final Decision Output](./images/Screenshot-FinalDecision.png)

---

## Future Plans

- **Enhancements to Pattern Recognition**:
  - Incorporate real neural network models for improved accuracy.
- **Dynamic Rule Definition**:
  - Allow users to define custom symbolic reasoning rules.
- **Integration with Real-World Sensors**:
  - Apply the system to robotics or self-driving simulations.

---

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add feature-name"`).
4. Push to your branch (`git push origin feature-name`).
5. Open a Pull Request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

This repository demonstrates the potential of neuro-symbolic systems in advancing AI agents by leveraging the strengths of neural networks and symbolic reasoning.
