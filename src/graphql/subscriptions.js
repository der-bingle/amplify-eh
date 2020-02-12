/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLight = /* GraphQL */ `
  subscription OnCreateLight {
    onCreateLight {
      id
      name
      numberOfParticipants
      numberOfCards
      people {
        items {
          id
          firstName
          lastName
          phone
          everyoneHears
          smsPrayerCard
        }
        nextToken
      }
      neighbors {
        items {
          id
          lightID
          neighborID
        }
        nextToken
      }
      weeks {
        items {
          id
          ehNumber
          startDate
          lightID
        }
        nextToken
      }
    }
  }
`;
export const onUpdateLight = /* GraphQL */ `
  subscription OnUpdateLight {
    onUpdateLight {
      id
      name
      numberOfParticipants
      numberOfCards
      people {
        items {
          id
          firstName
          lastName
          phone
          everyoneHears
          smsPrayerCard
        }
        nextToken
      }
      neighbors {
        items {
          id
          lightID
          neighborID
        }
        nextToken
      }
      weeks {
        items {
          id
          ehNumber
          startDate
          lightID
        }
        nextToken
      }
    }
  }
`;
export const onDeleteLight = /* GraphQL */ `
  subscription OnDeleteLight {
    onDeleteLight {
      id
      name
      numberOfParticipants
      numberOfCards
      people {
        items {
          id
          firstName
          lastName
          phone
          everyoneHears
          smsPrayerCard
        }
        nextToken
      }
      neighbors {
        items {
          id
          lightID
          neighborID
        }
        nextToken
      }
      weeks {
        items {
          id
          ehNumber
          startDate
          lightID
        }
        nextToken
      }
    }
  }
`;
export const onCreatePerson = /* GraphQL */ `
  subscription OnCreatePerson {
    onCreatePerson {
      id
      firstName
      lastName
      phone
      everyoneHears
      smsPrayerCard
      light {
        id
        name
        numberOfParticipants
        numberOfCards
        people {
          nextToken
        }
        neighbors {
          nextToken
        }
        weeks {
          nextToken
        }
      }
    }
  }
`;
export const onUpdatePerson = /* GraphQL */ `
  subscription OnUpdatePerson {
    onUpdatePerson {
      id
      firstName
      lastName
      phone
      everyoneHears
      smsPrayerCard
      light {
        id
        name
        numberOfParticipants
        numberOfCards
        people {
          nextToken
        }
        neighbors {
          nextToken
        }
        weeks {
          nextToken
        }
      }
    }
  }
`;
export const onDeletePerson = /* GraphQL */ `
  subscription OnDeletePerson {
    onDeletePerson {
      id
      firstName
      lastName
      phone
      everyoneHears
      smsPrayerCard
      light {
        id
        name
        numberOfParticipants
        numberOfCards
        people {
          nextToken
        }
        neighbors {
          nextToken
        }
        weeks {
          nextToken
        }
      }
    }
  }
`;
export const onCreateNeighbor = /* GraphQL */ `
  subscription OnCreateNeighbor {
    onCreateNeighbor {
      id
      location {
        number
        street
        lat
        lon
      }
      firstName
      lastName
      secondName
      sex
      maritalStatus
      childrenPresent
      houseSize
      incomeMin
      incomeMax
      ageMin
      ageMax
      resLengthMin
      resLengthMax
      lights {
        items {
          id
          lightID
          neighborID
        }
        nextToken
      }
      weeks {
        items {
          id
          weekID
          neighborID
        }
        nextToken
      }
      prayerCount
    }
  }
`;
export const onUpdateNeighbor = /* GraphQL */ `
  subscription OnUpdateNeighbor {
    onUpdateNeighbor {
      id
      location {
        number
        street
        lat
        lon
      }
      firstName
      lastName
      secondName
      sex
      maritalStatus
      childrenPresent
      houseSize
      incomeMin
      incomeMax
      ageMin
      ageMax
      resLengthMin
      resLengthMax
      lights {
        items {
          id
          lightID
          neighborID
        }
        nextToken
      }
      weeks {
        items {
          id
          weekID
          neighborID
        }
        nextToken
      }
      prayerCount
    }
  }
`;
export const onDeleteNeighbor = /* GraphQL */ `
  subscription OnDeleteNeighbor {
    onDeleteNeighbor {
      id
      location {
        number
        street
        lat
        lon
      }
      firstName
      lastName
      secondName
      sex
      maritalStatus
      childrenPresent
      houseSize
      incomeMin
      incomeMax
      ageMin
      ageMax
      resLengthMin
      resLengthMax
      lights {
        items {
          id
          lightID
          neighborID
        }
        nextToken
      }
      weeks {
        items {
          id
          weekID
          neighborID
        }
        nextToken
      }
      prayerCount
    }
  }
`;
export const onCreateLightsAndNeighbors = /* GraphQL */ `
  subscription OnCreateLightsAndNeighbors {
    onCreateLightsAndNeighbors {
      id
      lightID
      neighborID
      light {
        id
        name
        numberOfParticipants
        numberOfCards
        people {
          nextToken
        }
        neighbors {
          nextToken
        }
        weeks {
          nextToken
        }
      }
      neighbor {
        id
        location {
          number
          street
          lat
          lon
        }
        firstName
        lastName
        secondName
        sex
        maritalStatus
        childrenPresent
        houseSize
        incomeMin
        incomeMax
        ageMin
        ageMax
        resLengthMin
        resLengthMax
        lights {
          nextToken
        }
        weeks {
          nextToken
        }
        prayerCount
      }
    }
  }
`;
export const onUpdateLightsAndNeighbors = /* GraphQL */ `
  subscription OnUpdateLightsAndNeighbors {
    onUpdateLightsAndNeighbors {
      id
      lightID
      neighborID
      light {
        id
        name
        numberOfParticipants
        numberOfCards
        people {
          nextToken
        }
        neighbors {
          nextToken
        }
        weeks {
          nextToken
        }
      }
      neighbor {
        id
        location {
          number
          street
          lat
          lon
        }
        firstName
        lastName
        secondName
        sex
        maritalStatus
        childrenPresent
        houseSize
        incomeMin
        incomeMax
        ageMin
        ageMax
        resLengthMin
        resLengthMax
        lights {
          nextToken
        }
        weeks {
          nextToken
        }
        prayerCount
      }
    }
  }
`;
export const onDeleteLightsAndNeighbors = /* GraphQL */ `
  subscription OnDeleteLightsAndNeighbors {
    onDeleteLightsAndNeighbors {
      id
      lightID
      neighborID
      light {
        id
        name
        numberOfParticipants
        numberOfCards
        people {
          nextToken
        }
        neighbors {
          nextToken
        }
        weeks {
          nextToken
        }
      }
      neighbor {
        id
        location {
          number
          street
          lat
          lon
        }
        firstName
        lastName
        secondName
        sex
        maritalStatus
        childrenPresent
        houseSize
        incomeMin
        incomeMax
        ageMin
        ageMax
        resLengthMin
        resLengthMax
        lights {
          nextToken
        }
        weeks {
          nextToken
        }
        prayerCount
      }
    }
  }
`;
export const onCreateWeeksAndNeighbors = /* GraphQL */ `
  subscription OnCreateWeeksAndNeighbors {
    onCreateWeeksAndNeighbors {
      id
      weekID
      neighborID
      week {
        id
        ehNumber
        startDate
        lightID
        light {
          id
          name
          numberOfParticipants
          numberOfCards
        }
        neighbors {
          nextToken
        }
      }
      neighbor {
        id
        location {
          number
          street
          lat
          lon
        }
        firstName
        lastName
        secondName
        sex
        maritalStatus
        childrenPresent
        houseSize
        incomeMin
        incomeMax
        ageMin
        ageMax
        resLengthMin
        resLengthMax
        lights {
          nextToken
        }
        weeks {
          nextToken
        }
        prayerCount
      }
    }
  }
`;
export const onUpdateWeeksAndNeighbors = /* GraphQL */ `
  subscription OnUpdateWeeksAndNeighbors {
    onUpdateWeeksAndNeighbors {
      id
      weekID
      neighborID
      week {
        id
        ehNumber
        startDate
        lightID
        light {
          id
          name
          numberOfParticipants
          numberOfCards
        }
        neighbors {
          nextToken
        }
      }
      neighbor {
        id
        location {
          number
          street
          lat
          lon
        }
        firstName
        lastName
        secondName
        sex
        maritalStatus
        childrenPresent
        houseSize
        incomeMin
        incomeMax
        ageMin
        ageMax
        resLengthMin
        resLengthMax
        lights {
          nextToken
        }
        weeks {
          nextToken
        }
        prayerCount
      }
    }
  }
`;
export const onDeleteWeeksAndNeighbors = /* GraphQL */ `
  subscription OnDeleteWeeksAndNeighbors {
    onDeleteWeeksAndNeighbors {
      id
      weekID
      neighborID
      week {
        id
        ehNumber
        startDate
        lightID
        light {
          id
          name
          numberOfParticipants
          numberOfCards
        }
        neighbors {
          nextToken
        }
      }
      neighbor {
        id
        location {
          number
          street
          lat
          lon
        }
        firstName
        lastName
        secondName
        sex
        maritalStatus
        childrenPresent
        houseSize
        incomeMin
        incomeMax
        ageMin
        ageMax
        resLengthMin
        resLengthMax
        lights {
          nextToken
        }
        weeks {
          nextToken
        }
        prayerCount
      }
    }
  }
`;
export const onCreateWeek = /* GraphQL */ `
  subscription OnCreateWeek {
    onCreateWeek {
      id
      ehNumber
      startDate
      lightID
      light {
        id
        name
        numberOfParticipants
        numberOfCards
        people {
          nextToken
        }
        neighbors {
          nextToken
        }
        weeks {
          nextToken
        }
      }
      neighbors {
        items {
          id
          weekID
          neighborID
        }
        nextToken
      }
    }
  }
`;
export const onUpdateWeek = /* GraphQL */ `
  subscription OnUpdateWeek {
    onUpdateWeek {
      id
      ehNumber
      startDate
      lightID
      light {
        id
        name
        numberOfParticipants
        numberOfCards
        people {
          nextToken
        }
        neighbors {
          nextToken
        }
        weeks {
          nextToken
        }
      }
      neighbors {
        items {
          id
          weekID
          neighborID
        }
        nextToken
      }
    }
  }
`;
export const onDeleteWeek = /* GraphQL */ `
  subscription OnDeleteWeek {
    onDeleteWeek {
      id
      ehNumber
      startDate
      lightID
      light {
        id
        name
        numberOfParticipants
        numberOfCards
        people {
          nextToken
        }
        neighbors {
          nextToken
        }
        weeks {
          nextToken
        }
      }
      neighbors {
        items {
          id
          weekID
          neighborID
        }
        nextToken
      }
    }
  }
`;
