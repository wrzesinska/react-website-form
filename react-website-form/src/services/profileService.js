import profileRegistry from "../registry/profileRegistry.js";

class ProfileService {
  static storageKey = "profileData";

  persist(profileData) {
    profileRegistry.persist(JSON.stringify(profileData));
  }

  retrive() {
    return JSON.parse(profileRegistry.retrive());
  }

  birthdayConvert(date) {
    const newDate = date;
    console.log(newDate);
    return newDate;
  }
}

const profileService = new ProfileService();

export default profileService;
