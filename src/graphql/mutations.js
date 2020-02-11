/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLight = /* GraphQL */ `
  mutation CreateLight(
    $input: CreateLightInput!
    $condition: ModelLightConditionInput
  ) {
    createLight(input: $input, condition: $condition) {
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
export const updateLight = /* GraphQL */ `
  mutation UpdateLight(
    $input: UpdateLightInput!
    $condition: ModelLightConditionInput
  ) {
    updateLight(input: $input, condition: $condition) {
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
export const deleteLight = /* GraphQL */ `
  mutation DeleteLight(
    $input: DeleteLightInput!
    $condition: ModelLightConditionInput
  ) {
    deleteLight(input: $input, condition: $condition) {
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
export const createPerson = /* GraphQL */ `
  mutation CreatePerson(
    $input: CreatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    createPerson(input: $input, condition: $condition) {
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
export const updatePerson = /* GraphQL */ `
  mutation UpdatePerson(
    $input: UpdatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    updatePerson(input: $input, condition: $condition) {
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
export const deletePerson = /* GraphQL */ `
  mutation DeletePerson(
    $input: DeletePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    deletePerson(input: $input, condition: $condition) {
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
export const createNeighbor = /* GraphQL */ `
  mutation CreateNeighbor(
    $input: CreateNeighborInput!
    $condition: ModelNeighborConditionInput
  ) {
    createNeighbor(input: $input, condition: $condition) {
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
export const updateNeighbor = /* GraphQL */ `
  mutation UpdateNeighbor(
    $input: UpdateNeighborInput!
    $condition: ModelNeighborConditionInput
  ) {
    updateNeighbor(input: $input, condition: $condition) {
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
export const deleteNeighbor = /* GraphQL */ `
  mutation DeleteNeighbor(
    $input: DeleteNeighborInput!
    $condition: ModelNeighborConditionInput
  ) {
    deleteNeighbor(input: $input, condition: $condition) {
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
export const createLightsAndNeighbors = /* GraphQL */ `
  mutation CreateLightsAndNeighbors(
    $input: CreateLightsAndNeighborsInput!
    $condition: ModelLightsAndNeighborsConditionInput
  ) {
    createLightsAndNeighbors(input: $input, condition: $condition) {
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
export const updateLightsAndNeighbors = /* GraphQL */ `
  mutation UpdateLightsAndNeighbors(
    $input: UpdateLightsAndNeighborsInput!
    $condition: ModelLightsAndNeighborsConditionInput
  ) {
    updateLightsAndNeighbors(input: $input, condition: $condition) {
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
export const deleteLightsAndNeighbors = /* GraphQL */ `
  mutation DeleteLightsAndNeighbors(
    $input: DeleteLightsAndNeighborsInput!
    $condition: ModelLightsAndNeighborsConditionInput
  ) {
    deleteLightsAndNeighbors(input: $input, condition: $condition) {
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
