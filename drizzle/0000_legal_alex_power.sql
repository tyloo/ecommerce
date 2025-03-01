CREATE TYPE "public"."condition" AS ENUM('new', 'excellent', 'very_good', 'good');--> statement-breakpoint
CREATE TYPE "public"."gender" AS ENUM('male', 'female');--> statement-breakpoint
CREATE TYPE "public"."type" AS ENUM('category', 'default', 'type', 'size');--> statement-breakpoint
CREATE TABLE "collection" (
	"id" serial PRIMARY KEY NOT NULL,
	"handle" varchar NOT NULL,
	"name" varchar NOT NULL,
	"description" text,
	"gender" "gender" DEFAULT 'male' NOT NULL,
	"type" "type" DEFAULT 'default' NOT NULL,
	"image" varchar NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "collection_handle_unique" UNIQUE("handle")
);
--> statement-breakpoint
CREATE TABLE "product_collection" (
	"product_id" integer NOT NULL,
	"collection_id" integer NOT NULL,
	CONSTRAINT "product_collection_product_id_collection_id_pk" PRIMARY KEY("product_id","collection_id")
);
--> statement-breakpoint
CREATE TABLE "product" (
	"id" serial PRIMARY KEY NOT NULL,
	"handle" varchar NOT NULL,
	"name" varchar NOT NULL,
	"description" text,
	"price" integer NOT NULL,
	"original_price" integer NOT NULL,
	"condition" "condition" DEFAULT 'new' NOT NULL,
	"size" text NOT NULL,
	"color" text NOT NULL,
	"image" varchar[] NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "product_handle_unique" UNIQUE("handle")
);
--> statement-breakpoint
ALTER TABLE "product_collection" ADD CONSTRAINT "product_collection_product_id_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."product"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_collection" ADD CONSTRAINT "product_collection_collection_id_collection_id_fk" FOREIGN KEY ("collection_id") REFERENCES "public"."collection"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "Collection_handle_idx" ON "collection" USING btree ("handle");--> statement-breakpoint
CREATE INDEX "Collection_gender_idx" ON "collection" USING btree ("gender");--> statement-breakpoint
CREATE INDEX "Collection_type_idx" ON "collection" USING btree ("type");--> statement-breakpoint
CREATE INDEX "Product_handle_idx" ON "product" USING btree ("handle");--> statement-breakpoint
CREATE INDEX "Product_condition_idx" ON "product" USING btree ("condition");--> statement-breakpoint
CREATE INDEX "Product_size_idx" ON "product" USING btree ("size");--> statement-breakpoint
CREATE INDEX "Product_color_idx" ON "product" USING btree ("color");