import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats, MdAdminPanelSettings } from 'react-icons/md';

export const LINKS = [
  {
    text: 'Add Job',
    path: '.',
    icon: <FaWpforms />,
  },
  {
    text: 'All Jobs',
    path: 'all-jobs',
    icon: <MdQueryStats />,
  },
  {
    text: 'Stats',
    path: 'stats',
    icon: <IoBarChartSharp />,
  },
  {
    text: 'Profile',
    path: 'profile',
    icon: <ImProfile />,
  },
  {
    text: 'Admin',
    path: 'admin',
    icon: <MdAdminPanelSettings />,
  },
];
