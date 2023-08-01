export interface ICryptService {
    hash_string(text: string): string;

    verify_hashed(text: string, hashed_text: string): boolean;
}