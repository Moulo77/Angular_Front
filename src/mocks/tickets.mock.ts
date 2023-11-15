import { Major, Ticket } from '../models/ticket';
import { STUDENTS_MOCKED } from './students.mock';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Toronto',
    description: '',
    date: dateToday,
    student: STUDENTS_MOCKED[0],
    major: Major.SI,
    archived: false
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: STUDENTS_MOCKED[1],
    major: Major.GE,
    archived: false
  },
  {
    title: 'SI6 in Tokyo',
    description: 'Description du voyage',
    date: dateToday,
    student: STUDENTS_MOCKED[0],
    major: Major.GB,
    archived: true
  },
];
