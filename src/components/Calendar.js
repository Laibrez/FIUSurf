// ...existing code...

<motion.button
  onClick={() => window.open('https://calendar.google.com/calendar/u/2?cid=Zml1c3VyZmNsdWJAZ21haWwuY29t', '_blank')}
  className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Join Event
</motion.button>

// ...existing code...
