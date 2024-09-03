export interface User {
  email: string;
  password: string;
  username: string;
  firstname: string;
  lastname: string;
  dateOfBirth: string;
}

export interface Contact {
  id: number;
  image: string;
  name: string;
  lastName: string;
  city: string;
  postCode: string;
  age?: string;
  gender?: string;
  dob?: any;
  street?: string;
  email?: string;
  phoneNumber?: string;
}

export interface ContactListProps {
  contacts: Contact[];
  onEditContact: (contact: Contact) => void;
  onDeleteContact: (id: number) => void;
}


export interface RegisterProps {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}