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
      }
    }
  }
`;
