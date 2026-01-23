import Client from 'pg';

//TODO: Create schema
  /*
    Url
     shortUrl | originalUrl | createdAt | expiresAt | createdBy
  */

/**
 *
 */
class PGPersistence {

  /**
   * Adds a newly generated short url to the database
   * @param url the url to add
   */
  async addShortUrl(url: string) {
    //TODO: create url type(s) and update param accordingly
    //TODO: execute query to insert a new url row
  }

  /**
   * Retrieves the full url for a given short url
   * @param shortUrl the short url for which to look up the full url
   * @returns the full url for the given short url
   */
  async getFullUrl(shortUrl: string): Promise<string> {
    //TODO: execute query to look up a full url from a given short url
    return '';
  }

}

export default PGPersistence;