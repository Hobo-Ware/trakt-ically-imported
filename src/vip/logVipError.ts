import { limit } from "./limit";

export function logVipError(
    vip: boolean,
    showsCount: number,
    moviesCount: number,
) {
    console.error("\n❌ WATCHLIST IMPORT FAILED");
    console.error(`\n⚠️  Your watchlist exceeds the limit:`);
    console.error(`   Shows: ${showsCount}`);
    console.error(`   Movies: ${moviesCount}`);
    console.error(`   Total: ${showsCount + moviesCount}`);
    console.error(
        `   Limit: ${limit(vip)} items (${vip ? "VIP" : "FREE"} tier)`,
    );

    if (!vip) {
        console.error(`💡 Trakt VIP members get a 10,000 item limit!`);
        console.error(
            `   Consider upgrading your account: https://trakt.tv/vip\n`,
        );
    }
    console.error(
        `\n⏭️  Skipping watchlist import and proceeding with watch history...\n`,
    );
}
