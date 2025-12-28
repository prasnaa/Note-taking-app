import React from 'react'

const CalendarEmbed = () => {
  return (
    <div className="w-full flex justify-center px-2 sm:px-4 lg:px-8 mt-6">
      
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKathmandu&showPrint=0&src=cGRoYXVsYWtvdGkxOEBnbWFpbC5jb20&src=YjM4Mzk4MGI1N2ZjYTgwN2ExZjU2N2E3YjI5OWJiMTc2Y2YxZGZmNTExYzc1MzhjZTZhMDFiNTk2YmNhNDY0ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=bmUubnAub2ZmaWNpYWwjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039be5&color=%23a79b8e&color=%230b8043"
          className="w-full h-screen sm:h-65vh md:h-70vh lg:h-75vh border border-gray-300 "
          title="Google Calendar"
        />
      </div>

    </div>
  )
}

export default CalendarEmbed
