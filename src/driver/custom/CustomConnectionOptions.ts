import { BaseDataSourceOptions } from "../../data-source/BaseDataSourceOptions"

/**
 * Oracle-specific connection options.
 */
export interface CustomConnectionOptions extends BaseDataSourceOptions {
    /**
     * Database type.
     */
    readonly type: "custom"

    /**
     * Type of the custom TypeORM driver to use.
     */
    readonly driverType: any

    /**
     * The driver object
     * This defaults to require("odbc")
     */
    readonly driver?: any

    /**
     * Database name to connect to.
     */
    readonly database?: string
}
