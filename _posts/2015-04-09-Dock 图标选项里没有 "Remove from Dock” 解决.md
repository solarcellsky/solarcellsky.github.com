---
layout: post
category : lessons
tagline: ""
tags : [Mac,OS X,Dock]
---
{% include JB/setup %}

- Open Terminal
- Type this command:

	defaults write com.apple.Dock contents-immutable -bool no

- Then force the Dock to quit and relaunch with this command:

	osascript -e 'tell application "Dock" to quit'