import { IValueLikePlugin, ICloneContext } from "change-checker";

export class DatePlugin implements IValueLikePlugin<Date> {
    public name: string = "DatePlugin";

    public isValueLikePlugin: true = true;

    public clone(_: ICloneContext, instance: Date): Date {
        return new Date(instance);
    }

    public equals(left: Date, right: Date): boolean {
        return left.getTime() === right.getTime();
    }

    public isMatch(instance: any): instance is Date {
        return instance instanceof Date;
    }
}

declare module "change-checker/types/ValueLikeRegistry" {
    export interface IValueLikeRegistry {
        date: Date;
    }
}
