const user = {
  id: 42,
  firstName: 'Ava',
  lastName: 'Stone',
  email: 'ava@example.com',
  phone: null,
  address: {
    city: 'London',
    country: 'UK',
  },
  account: {
    status: 'active',
    plan: 'pro',
  },
};

function getDisplayName(obj) {
    return `${obj.firstName} ${obj.lastName}`
}

function getLocation(obj) {
    return `${obj.address.city} ${obj.address.country}`
}

function getContactSummary(obj) {
    const contact = {
        'email': obj.email,
        'phone': obj.phone
    }

    return contact
}

function isAccountActive(obj) {
    return obj.account.status === 'active'? true:false
}

function createProfileSummary(obj) {

     const fullName = getDisplayName(obj)
     const location = getLocation(obj)
     const contact = getContactSummary(obj)
     const activity = isAccountActive(obj)

     return {
        fullName,
        location,
        contact,
        activity
    }
}

console.log(createProfileSummary(user))