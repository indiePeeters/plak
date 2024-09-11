export interface Translations {
  features: {
    homeHeader: {
      title: string,
      description: string,
      primaryAction: string,
      secondaryAction: string,
    },
    aboutUs: {
      title: string
      text: string
    },
    ourProducts: {
      title: string,
      products: {
        bread: {
          title: string,
          description: string
        },
        cheese: {
          title: string,
          description: string
        },
        meat: {
          title: string,
          description: string
        },
        other: {
          title: string,
          description: string
        }
      }
    },
    homeFooter: {
      openingTimes: {
        title: string,
        description: string,
        daytimes: {
          monday: {
            day: string,
            from: string,
            until: string
          },
          tuesday: {
            day: string,
            from: string,
            until: string
          },
          wednesday: {
            day: string,
            from: string,
            until: string
          },
          thursday: {
            day: string,
            from: string,
            until: string
          },
          friday: {
            day: string,
            from: string,
            until: string
          },
          saturday: {
            day: string,
            from: string,
            until: string
          },
          sunday: {
            day: string,
            from: string,
            until: string
          },
        }
      },
      address: string,
      socials: {
        instagram: { 
          name: string,
          url: string
        },
        facebook: { 
          name: string,
          url: string
        },
        mail: { 
          name: string,
          url: string
        },
      }
    }
  }
}
