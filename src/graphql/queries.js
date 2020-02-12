/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLight = /* GraphQL */ `
  query GetLight($id: ID!) {
    getLight(id: $id) {
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
export const listLights = /* GraphQL */ `
  query ListLights(
    $filter: ModelLightFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLights(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPerson = /* GraphQL */ `
  query GetPerson($id: ID!) {
    getPerson(id: $id) {
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
export const listPersons = /* GraphQL */ `
  query ListPersons(
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        }
      }
      nextToken
    }
  }
`;
export const getNeighbor = /* GraphQL */ `
  query GetNeighbor($id: ID!) {
    getNeighbor(id: $id) {
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
export const listNeighbors = /* GraphQL */ `
  query ListNeighbors(
    $filter: ModelNeighborFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNeighbors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getWeek = /* GraphQL */ `
  query GetWeek($id: ID!) {
    getWeek(id: $id) {
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
export const listWeeks = /* GraphQL */ `
  query ListWeeks(
    $filter: ModelWeekFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWeeks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
