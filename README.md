

---

# 🧁 Vision X — Smart Analytics for Patisseries

### YOLOv8 • DeepSORT • Real-Time Alerts • Business KPIs

## 🎯 Business Need

Modern patisseries face operational challenges such as long waiting times, bottlenecks, and lack of data visibility. Vision X solves these challenges by transforming raw camera feeds into **real-time, actionable insights**.

---

## 💡 Our Solution

Vision X transforms simple camera video into **real-time operational intelligence**, including customer tracking, queue monitoring, waiting-time prediction, KPI generation, and smart Telegram alerts.

---

## 📚 Source of Video Data

The videos used for detection, tracking, and performance testing were **provided by ANAVID** as part of the Analytics & Computer Vision challenge.

These videos represent real-world patisserie scenarios (customers entering, queuing, paying, and exiting) and serve as the **primary dataset** used to evaluate and validate the Vision X system.

**Source:**
**ANAVID — Provided challenge dataset videos (2025)**
Located in the repository at:

```
/demo/anavid_videos/
```

---

## 🗂 Repository Structure

```
📁 Vision_X
│
├── 📄 README.md
│
├── 📁 frontend/                 # Website interface for Vision X
│
├── 📁 notebook/                 # Main Colab notebook (YOLOv8, DeepSORT, KPIs)
│
├── 📁 telegram/                 # Telegram bot outputs + Colab API request snippets
│
├── 📁 demo/
│   ├── demo_video.mp4           # Demonstration of the website + detection results
│   └── 📁 anavid_videos/        # ⭐ Source videos provided by ANAVID
│       ├── anavid_video_1.mp4
│       ├── anavid_video_2.mp4
│       └── ...
│
└── ...
```

---

## 👁️ Computer Vision Pipeline

* YOLOv8 for real-time detection
* DeepSORT for stable ID-based tracking
* Custom logic for state machines (Enter → Wait → Pay → Exit)
* Annotated video generation
* KPI extraction (waiting time, payment duration, queue length)

---

## 🚨 Telegram Alerts

The system sends instant notifications via the bot **patisserie_waiting_bot** when:

* Waiting time exceeds threshold
* Payment is too slow
* Queue is saturated
* Queue evolves unusually
  Includes graphs, snapshots, and video segments.

---

## 📊 Outputs

* KPI CSV
* Tracking logs
* Annotated analytics video
* HUD dashboard
* Telegram reports

---

## 👥 Team

**Razi Ammari • Ikram Meniaoui • Tasnim Mtir • Aya Mekni • Nour Saibi**

---

If you want, I can also:
🔹 Add GitHub badges (build status, tech stack, license)
🔹 Create a professional project banner with your logo
🔹 Write installation/setup instructions
🔹 Prepare a “How it works” diagram for the README
