export interface PackageManifest {
  name: string;
  display: string;
  version: string;
  addon?: boolean;
  author?: string;
  description?: string;
  external?: string[];
  globals?: Record<string, string>;
  manualImport?: boolean;
  deprecated?: boolean;
  submodules?: boolean;
  iife?: boolean;
  keywords?: string[];
}