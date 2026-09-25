/**
 * Configuration publicitaire Revive Adserver pour le domaine 123fenetre.fr
 * Source : Inventaire ads.les4h.fr (Affiliate ID 98)
 */

export interface AdZoneConfig {
  zoneId: number;
  format: 'leaderboard' | 'mediumRectangle' | 'mobileBanner' | 'largeRectangle' | 'halfPage' | 'skyscraper';
  width: number;
  height: number;
  name: string;
}

export type AdSlotKey =
  | 'header'
  | 'inContent'
  | 'mobileSticky'
  | 'largeRectangle'
  | 'halfPage'
  | 'skyscraper';

export interface DomainAdsConfig {
  domain: string;
  affiliateId: number;
  reviveId: string;
  scriptUrl: string;
  zones: Record<AdSlotKey, AdZoneConfig>;
}

export const adsConfig: DomainAdsConfig = {
  domain: '123fenetre.fr',
  affiliateId: 98,
  reviveId: 'ac119b122a644588953c74c4c1daee06',
  scriptUrl: '//ads.les4h.fr/www/delivery/asyncjs.php',
  zones: {
    header: {
      zoneId: 602,
      format: 'leaderboard',
      width: 728,
      height: 90,
      name: 'Leaderboard 602',
    },
    inContent: {
      zoneId: 603,
      format: 'mediumRectangle',
      width: 300,
      height: 250,
      name: 'Medium Rectangle 603',
    },
    mobileSticky: {
      zoneId: 599,
      format: 'mobileBanner',
      width: 320,
      height: 100,
      name: 'Mobile Banner 599',
    },
    largeRectangle: {
      zoneId: 598,
      format: 'largeRectangle',
      width: 336,
      height: 280,
      name: 'Large Rectangle 598',
    },
    halfPage: {
      zoneId: 601,
      format: 'halfPage',
      width: 300,
      height: 600,
      name: 'Half Page 601',
    },
    skyscraper: {
      zoneId: 600,
      format: 'skyscraper',
      width: 160,
      height: 600,
      name: 'Skyscraper 600',
    },
  },
};

export default adsConfig;
