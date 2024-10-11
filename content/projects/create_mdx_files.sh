#!/bin/bash

# Function to create an MDX file with the specified content
create_mdx_file() {
  filename="$1.mdx"
  echo "$2" > "$filename"
  echo "$filename created."
}

# CAPTAIN.mdx content
captain_content="---
title: \"CAPTAIN\"
tags: [\"Full Stack\", \"Django\", \"React JS\", \"PostgreSQL\", \"Next JS\", \"React Native\", \"EXPO\", \"Python\", \"JavaScript\", \"Tailwind CSS\"]
summary: \"An open-source learning app with a Django backend, NextJS front-end for staff, and React Native app for learners. It’s an intelligent tutoring system that adapts courses to learners, ensuring no repetition of knowledge.\"
homepage: \"https://captainapp.example\"
githuburl: \"https://github.com/sanjay/captain\"
---"

# SHADES: Combat.mdx content
shades_content="---
title: \"SHADES: Combat\"
tags: [\"UNITY 3D\", \"C#\", \"Enemy AI\", \"Realtime Multiplayer\", \"In-App Purchases\", \"Google Play Services\"]
summary: \"A 3D shooter game for Android with 1.5M players and a 4.5/5 rating. The game features real-time multiplayer and in-app purchases.\"
homepage: \"https://shadescombat.example\"
---"

# ScaleVote.mdx content
scalevote_content="---
title: \"ScaleVote\"
tags: [\"Java Spring Boot\", \"Kafka\", \"PostgreSQL\"]
summary: \"A minimal election conducting system to learn Spring Boot and experiment with Apache Kafka for scalability and real-time processing.\"
---"

# This Portfolio.mdx content
portfolio_content="---
title: \"This Portfolio\"
tags: [\"React JS\", \"Next JS\", \"JavaScript\", \"TypeScript\", \"Tailwind CSS\"]
summary: \"My personal website and portfolio built with NextJS, TypeScript, and Tailwind CSS, featuring a responsive design.\"
githuburl: \"https://github.com/sanjay/portfolio\"
---"

# Unity Ludo Framework.mdx content
ludo_content="---
title: \"Unity Ludo Framework\"
tags: [\"UNITY 3D\", \"C#\"]
summary: \"An open-source Unity3D project for creating Ludo games. It includes a mobile-based 2D Ludo game with AI and can be extended to 3D or different Ludo variations.\"
githuburl: \"https://github.com/sanjay/ludo-framework\"
---"

# phpWikiCMS.mdx content
phpwiki_content="---
title: \"phpWikiCMS\"
tags: [\"Full Stack\", \"PHP\", \"MySQL\"]
summary: \"An open-source framework to create wiki-style page management systems, supporting tree-style relationships for management and viewing.\"
githuburl: \"https://github.com/sanjay/phpwikicms\"
---"

# KUK Student Notification System.mdx content
kuk_content="---
title: \"KUK Student Notification & Information System\"
tags: [\"PHP\", \"MySQL\", \"Android\", \"Java\", \"SQLite\", \"Push Notifications\", \"Material Design\"]
summary: \"A system for KUK DCSE students with a PHP backend and Android app, including an interactive timetable component.\"
---"

# Cheatify.mdx content
cheatify_content="---
title: \"Cheatify\"
tags: [\"Android\", \"Java\", \"SQLite\", \"Google Sheets\"]
summary: \"An Android adaptation of the Cheatbook encyclopedia of video game cheats, offering offline viewing and online database integration with Google Sheets.\"
---"

# Rough Fight.mdx content
roughfight_content="---
title: \"Rough Fight\"
tags: [\"Unity 3D\", \"C#\"]
summary: \"A brawl-style game with hand-combat AI, featuring local multiplayer support. The project remains incomplete and unreleased.\"
---"

# Minimal Clock Widget.mdx content
clockwidget_content="---
title: \"Minimal Clock Widget\"
tags: [\"Android\", \"Java\"]
summary: \"A minimal and elegant clock widget for Android homescreens, designed to provide a simple and sleek user experience.\"
---"

# Hummer 3D Live Wallpaper.mdx content
hummer_content="---
title: \"Hummer 3D Live Wallpaper\"
tags: [\"Android\", \"Unity 3D\", \"UnityScript\"]
summary: \"A live wallpaper for Android featuring a 3D model of a GMC Hummer, responding to user touches.\"
---"

# Create files
create_mdx_file "CAPTAIN" "$captain_content"
create_mdx_file "SHADES-Combat" "$shades_content"
create_mdx_file "ScaleVote" "$scalevote_content"
create_mdx_file "This-Portfolio" "$portfolio_content"
create_mdx_file "Unity-Ludo-Framework" "$ludo_content"
create_mdx_file "phpWikiCMS" "$phpwiki_content"
create_mdx_file "KUK-Student-Notification-System" "$kuk_content"
create_mdx_file "Cheatify" "$cheatify_content"
create_mdx_file "Rough-Fight" "$roughfight_content"
create_mdx_file "Minimal-Clock-Widget" "$clockwidget_content"
create_mdx_file "Hummer-3D-Live-Wallpaper" "$hummer_content"

echo "MDX files created successfully."
