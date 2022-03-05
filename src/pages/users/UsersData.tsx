import faker from "@faker-js/faker";
import PeopleIcon from "../../assets/vectors/people.svg";
import GroupUsersIcon from "../../assets/vectors/group-users.svg";
import UserLoansIcon from "../../assets/vectors/user-loans.svg";
import UsersWithSavingsIcon from "../../assets/vectors/users-with-savings.svg";
import PickerIcon from "../../assets/vectors/picker.svg";

interface UsersDataProps {
  title: any;
  icon: any;
  figure: string;
}

interface UsersTableDataProps {
  id: number;
  organization: string;
  username: string;
  email: string;
  phone_number: string;
  date_joined: any;
  status: any;
  btn: any;
}

export const UsersTableData: UsersTableDataProps[] = [
  {
    id: 0,
    organization: faker.company.companyName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    phone_number: faker.phone.phoneNumber(),
    date_joined: "May 15, 2020 10:00AM",
    status: "Inactive",
    btn: PickerIcon,
  },
  {
    id: 1,

    organization: faker.company.companyName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    phone_number: faker.phone.phoneNumber(),
    date_joined: "May 15, 2020 10:00AM",
    status: "Inactive",
    btn: PickerIcon,
  },
  {
    id: 2,

    organization: faker.company.companyName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    phone_number: faker.phone.phoneNumber(),
    date_joined: "May 15, 2020 10:00AM",
    status: "Inactive",
    btn: PickerIcon,
  },
  {
    id: 3,

    organization: faker.company.companyName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    phone_number: faker.phone.phoneNumber(),
    date_joined: "May 15, 2020 10:00AM",
    status: "Inactive",
    btn: PickerIcon,
  },
  {
    id: 4,

    organization: faker.company.companyName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    phone_number: faker.phone.phoneNumber(),
    date_joined: "May 15, 2020 10:00AM",
    status: "Inactive",
    btn: PickerIcon,
  },
  {
    id: 5,

    organization: faker.company.companyName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    phone_number: faker.phone.phoneNumber(),
    date_joined: "May 15, 2020 10:00AM",
    status: "Inactive",
    btn: PickerIcon,
  },
  {
    id: 6,

    organization: faker.company.companyName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    phone_number: faker.phone.phoneNumber(),
    date_joined: "May 15, 2020 10:00AM",
    status: "Inactive",
    btn: PickerIcon,
  },
  {
    id: 7,

    organization: faker.company.companyName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    phone_number: faker.phone.phoneNumber(),
    date_joined: "May 15, 2020 10:00AM",
    status: "Inactive",
    btn: PickerIcon,
  },
  {
    id: 8,

    organization: faker.company.companyName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    phone_number: faker.phone.phoneNumber(),
    date_joined: "May 15, 2020 10:00AM",
    status: "Inactive",
    btn: PickerIcon,
  },
  {
    id: 9,

    organization: faker.company.companyName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    phone_number: faker.phone.phoneNumber(),
    date_joined: "May 15, 2020 10:00AM",
    status: "Inactive",
    btn: PickerIcon,
  },
  {
    id: 10,

    organization: faker.company.companyName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    phone_number: faker.phone.phoneNumber(),
    date_joined: "May 15, 2020 10:00AM",
    status: "Inactive",
    btn: PickerIcon,
  },
  {
    id: 11,

    organization: faker.company.companyName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    phone_number: faker.phone.phoneNumber(),
    date_joined: "May 15, 2020 10:00AM",
    status: "Inactive",
    btn: PickerIcon,
  },
];

export const UsersData: UsersDataProps[] = [
  {
    title: "Users",
    icon: PeopleIcon,
    figure: "2,453",
  },
  {
    title: "Active Users",
    icon: GroupUsersIcon,
    figure: "2,453",
  },
  {
    title: "Users with loans",
    figure: "12,453",
    icon: UserLoansIcon,
  },
  {
    title: "Users with savings",
    figure: "102,453",
    icon: UsersWithSavingsIcon,
  },
];
