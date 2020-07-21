import { PluginObject, VueConstructor } from "vue";
import { LoggerService } from "./loggerService";
import { LoggerOptions } from "./loggerOptions";

export const Logger: PluginObject<LoggerOptions> = {
    install(Vue: VueConstructor<Vue>, 
        options: LoggerOptions | undefined) {
            
        Vue.$logger = new LoggerService(options);
    }
}
