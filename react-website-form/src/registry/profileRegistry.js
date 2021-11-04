class ProfileRegistry {
  static storageKey = "profileData";

  persist(profileData) {
    localStorage.setItem(ProfileRegistry.storageKey, profileData);
  }

  retrive() {
    return localStorage.getItem(ProfileRegistry.storageKey);
  }
}

const profileRegistry = new ProfileRegistry();

export default profileRegistry;
