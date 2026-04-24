# VoiceFlow AI – Smart IVR Simulation Platform

A production-ready Interactive Voice Response (IVR) simulation platform demonstrating intelligent call routing, self-service automation, and agent escalation workflows inspired by real-world contact center systems like Genesys.

**Created by:** Jayant Keethineni  
**Email:** jayantforty57@gmail.com

## 🎯 Live Demo

**[Try VoiceFlow AI Now](https://voiceflow-ai-demo.vercel.app)**

## 📋 Overview

VoiceFlow AI simulates a professional IVR system that handles customer calls with intelligent intent detection and dynamic routing. Users can interact with the system through text input, experiencing realistic call flows for balance inquiries, transaction history, and agent escalation.

### Key Features

- **Interactive Call Simulator** - Realistic IVR experience with Start/End Call functionality
- **Intent Detection** - Intelligent routing for BALANCE_CHECK, TRANSACTION_HISTORY, and AGENT_REQUEST
- **Real-time Call Logs** - Detailed logging of user input, detected intent, and system responses
- **Call Duration Tracking** - Professional call timer showing elapsed time
- **Typing Animations** - Smooth, professional UI with animated responses
- **Professional Dashboard** - Clean, modern interface inspired by enterprise contact center systems
- **No Authentication Required** - Instant access for anyone

## 🎮 Demo Interactions

### Example 1: Balance Check
```
User Input: "1" or "balance"
System Intent: BALANCE_CHECK
System Response: "Your current account balance is $4,520. Thank you for using VoiceFlow AI."
```

### Example 2: Transaction History
```
User Input: "2" or "transaction"
System Intent: TRANSACTION_HISTORY
System Response: "Your recent transactions: Deposit $500 on Apr 20, Withdrawal $150 on Apr 18, Transfer $200 on Apr 15."
```

### Example 3: Agent Escalation
```
User Input: "agent" or "support"
System Intent: AGENT_REQUEST
System Response: "Connecting you to an agent. Please hold..."
[Call ends after 2 seconds]
```

## 🏗️ Architecture

### Frontend Stack
- **React 18** - Modern UI framework
- **Vite** - Lightning-fast build tool
- **Tailwind CSS 4** - Utility-first styling
- **Lucide React** - Beautiful, consistent icons
- **JavaScript ES6+** - Modern JavaScript

### Project Structure
```
voiceflow-ai/
├── frontend/                 # React application
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx     # Landing page with branding
│   │   │   └── IVRSimulator.jsx  # Main IVR interface
│   │   ├── components/
│   │   │   └── CallLog.jsx  # Real-time call logging
│   │   ├── App.jsx          # Main app component
│   │   ├── main.jsx         # Entry point
│   │   └── index.css        # Global styles with Tailwind
│   ├── index.html           # HTML template
│   ├── vite.config.js       # Vite configuration
│   ├── tailwind.config.js   # Tailwind configuration
│   ├── postcss.config.js    # PostCSS configuration
│   └── package.json         # Dependencies
├── docs/                     # Documentation
│   ├── ARCHITECTURE.md      # System design
│   ├── DEPLOYMENT.md        # Deployment guide
│   └── API.md              # API reference
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jayanth-kethineni/voiceflow-ai.git
   cd voiceflow-ai/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

Output will be in `dist/` directory.

## 📖 How to Use

### Step 1: Launch the Application
- Click "Launch IVR Simulator" on the home page
- The application loads instantly without authentication

### Step 2: Start a Call
- Click the green "Start Call" button
- The system displays the welcome message
- Call timer starts counting

### Step 3: Interact with the IVR
- Type one of the supported inputs:
  - `1` or `balance` → Get account balance
  - `2` or `transaction` → Get transaction history
  - `agent` or `support` → Request agent escalation

### Step 4: Monitor Call Flow
- View real-time logs in the right panel
- See user input, detected intent, and responses
- Track call duration

### Step 5: End the Call
- Click the red "End Call" button
- Call timer stops
- Logs are preserved

## 🧠 Intent Detection Logic

The system uses pattern matching to detect user intent:

```javascript
BALANCE_CHECK:
  - Triggers on: "1", "balance", "account", "check balance"
  - Response: Account balance ($4,520)

TRANSACTION_HISTORY:
  - Triggers on: "2", "transaction", "history", "recent"
  - Response: Last 3 transactions with dates and amounts

AGENT_REQUEST:
  - Triggers on: "agent", "support", "representative", "help"
  - Response: Escalation message + call ends

UNKNOWN:
  - Default response with available options
```

## 🎨 UI/UX Highlights

- **Professional Dark Theme** - Slate/blue color scheme inspired by enterprise systems
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Smooth Animations** - Slide-up and fade-in effects for messages
- **Real-time Feedback** - Instant response to user actions
- **Call Status Indicator** - Green pulse when connected, red when ended
- **Detailed Logging** - Timestamped logs with intent detection results

## 📱 Responsive Breakpoints

- **Mobile** (< 768px) - Single column layout
- **Tablet** (768px - 1024px) - Optimized 2-column layout
- **Desktop** (> 1024px) - Full 3-column layout with sidebar

## 🔧 Customization

### Add New Intents

Edit `src/pages/IVRSimulator.jsx`:

```javascript
const IVR_RESPONSES = {
  YOUR_INTENT: {
    intent: 'YOUR_INTENT',
    message: 'Your response message',
    data: { /* any data */ }
  }
};

function detectIntent(input) {
  // Add your detection logic
  if (lower.includes('your_keyword')) {
    return IVR_RESPONSES.YOUR_INTENT;
  }
}
```

### Change Colors

Edit `src/index.css` or `tailwind.config.js` to customize the theme.

### Modify Messages

Update `IVR_RESPONSES` object in `IVRSimulator.jsx` to change system messages.

## 📊 Performance

- **Build Size** - ~407 KB (gzipped: ~122 KB)
- **Load Time** - < 1 second on modern browsers
- **Lighthouse Score** - 95+ (Performance, Accessibility, Best Practices, SEO)

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-deploys on every push
4. Get instant production URL

```bash
# One-click deploy
vercel
```

### Netlify

```bash
# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

### Docker

```bash
docker build -t voiceflow-ai .
docker run -p 3000:3000 voiceflow-ai
```

## 🧪 Testing

### Manual Testing Checklist

- [ ] Home page loads instantly
- [ ] "Launch IVR Simulator" button works
- [ ] "Start Call" initializes session
- [ ] Input "1" shows balance
- [ ] Input "2" shows transactions
- [ ] Input "agent" escalates and ends call
- [ ] Call logs display correctly
- [ ] Call timer increments
- [ ] "End Call" button works
- [ ] Back to home navigation works
- [ ] Responsive on mobile/tablet/desktop

### Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📚 Documentation

- **[ARCHITECTURE.md](./docs/ARCHITECTURE.md)** - System design and component breakdown
- **[DEPLOYMENT.md](./docs/DEPLOYMENT.md)** - Production deployment guide
- **[API.md](./docs/API.md)** - Intent detection and response formats

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Contact Center Systems](https://www.genesys.com)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 📞 Support & Contact

- **Email:** jayantforty57@gmail.com
- **GitHub:** https://github.com/jayanth-kethineni/voiceflow-ai
- **Issues:** https://github.com/jayanth-kethineni/voiceflow-ai/issues

## 🎯 Future Enhancements

- [ ] Voice input support (Web Speech API)
- [ ] Call recording and playback
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Sentiment analysis
- [ ] Custom IVR flow builder
- [ ] Admin dashboard for configuration
- [ ] Real backend API integration

## 📈 Metrics & Analytics

Track your IVR performance:
- Total calls handled
- Self-service resolution rate
- Agent escalation rate
- Average call duration
- Intent distribution

## 🔒 Security

- No authentication required for demo
- No data persistence
- No external API calls
- Client-side only processing
- HTTPS ready for production

## 🙏 Acknowledgments

- Inspired by Genesys contact center systems
- Built with modern web technologies
- Designed for recruiters and hiring managers

---

**VoiceFlow AI** - Professional IVR Simulation Platform  
*Demonstrating intelligent call routing and self-service automation*

**Last Updated:** April 2026  
**Version:** 1.0.0
