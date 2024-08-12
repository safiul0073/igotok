import { Icon } from "@iconify-icon/react";
import React, { useMemo } from "react";

export const OverviewGrid = ({  items = [] }) => {
    // check item length
    const gridStyle = useMemo(() => {
        if (items.length == 2) {
            return "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2";
        } else if (items.length == 3) {
            return "sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3";
        } else if (items.length >= 4) {
            return "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
        }
    },[items]);
    return (
        <section
            className={`grid grid-cols-1 gap-6 ${gridStyle}`}
        >
            {items.map((item, index) => (
                <OverViewCard key={index} {...item} />
            ))}
        </section>
    );
};

export const OverViewCard = ({
    title = "Total Users",
    icon = "heroicons:user-group",
    iconBgColor = "bg-primary-500 bg-opacity-20 text-primary-500",
    textColor = "text-slate-500",
    value = "$20.00",
}) => {
    return (
        <div className="h-full w-full">
            <div className="card">
                <div className="card-body flex items-center gap-4">
                    <div
                        className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${iconBgColor}`}
                    >
                        <Icon icon={icon} />
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                        <p className={`text-sm tracking-wide ${textColor}`}>
                            {title}
                        </p>
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                            {value}
                            {/* <span className="flex items-center text-xs font-medium text-success-500">
                            <i className="h-3 w-3" stroke-width="3px" data-feather="arrow-up-right"></i> 3.2%</span
                        > */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
