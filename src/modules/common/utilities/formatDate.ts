import dayjs, { Dayjs } from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

type DateFormatName = 'dateOnly' | 'dateAndTime'

const formats: Record<DateFormatName, string> = {
  dateOnly: 'YYYY-MM-DD',
  dateAndTime: 'YYYY-MM-DD HH:mm',
}

type DateInput = string | Date | Dayjs | undefined | null

export function formatDate(date: DateInput, formatName: DateFormatName = 'dateOnly') {
  if (!date) return ''
  const d = dayjs(+date)
  if (d.isValid()) {
    return d.format(formats[formatName])
  }
  return dayjs(date).format(formats[formatName])
}
