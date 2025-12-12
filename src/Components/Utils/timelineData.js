/**
 * Timeline Data Configuration
 * Easily add new years and months by adding entries to this array
 * 
 * Structure:
 * - year: The year number
 * - months: Array of month objects
 *   - month: Short month name (e.g., "Mar", "Jul")
 *   - activeId: The ID that corresponds to the experience item (used in ExperiencesItem.jsx)
 */
export const timelineData = [
  {
    year: 2019,
    months: [
      { month: "Mar", activeId: 1 },
      { month: "Jul", activeId: 2 },
      { month: "Aug", activeId: 3 },
    ],
  },
  {
    year: 2020,
    months: [
      { month: "Feb", activeId: 4 },
      { month: "May", activeId: 5 },
      { month: "Sep", activeId: 6 },
    ],
  },
  // Add more years here as needed:
  // {
  //   year: 2021,
  //   months: [
  //     { month: "Nov", activeId: 7 },
  //   ],
  // },
]

/**
 * Get all years from timeline data
 */
export function getTimelineYears() {
  return timelineData.map((item) => item.year)
}

/**
 * Get months for a specific year
 */
export function getMonthsForYear(year) {
  const yearData = timelineData.find((item) => item.year === year)
  return yearData ? yearData.months : []
}

/**
 * Get the active ID for a specific year and month
 */
export function getActiveIdForYearMonth(year, month) {
  const yearData = timelineData.find((item) => item.year === year)
  if (!yearData) return null
  
  const monthData = yearData.months.find((m) => m.month === month)
  return monthData ? monthData.activeId : null
}

