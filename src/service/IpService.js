import { IpApi } from "api/IpApi";

export class IpService {
  static async IpDetailsGet() {
    return await IpApi.IpDetailsGet()
  }
}
