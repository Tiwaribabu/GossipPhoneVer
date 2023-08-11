import { useEffect, useState } from "react";
import * as Contacts from "expo-contacts";

export default function useContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });
        if (data.length > 0) {
          const sortedContacts = data
            .filter(
               (c) =>
                  c.firstName &&
                  c.phoneNumbers &&
                  c.phoneNumbers[0] &&
                  c.phoneNumbers[0].number
            )
            .map(mapContactToUser)
            .sort((a, b) => a.contactName.localeCompare(b.contactName));
          setContacts(sortedContacts);
        }
      }
    };

    fetchContacts();
  }, []);

  return contacts;
}

function mapContactToUser(contact) {
  return {
    contactName:
      contact.firstName && contact.lastName
        ? `${contact.firstName} ${contact.lastName}`
        : contact.firstName,
    phoneNumber: contact.phoneNumbers[0].number.replace(/\s+/g, ''),
  };
}
