import { LoggerOptions } from '@/services/logger/loggerOptions';
import { LoggerService } from '@/services/logger/loggerService';
import Vue from "vue";

declare module 'vue/types/vue' {
    interface Vue {
        $logger: LoggerService;
    }

    interface VueConstructor {
        $logger: LoggerService;
    }

    interface ComponentOptions<V extends Vue> {
        $loggerOptions?: LoggerOptions;
    }
}