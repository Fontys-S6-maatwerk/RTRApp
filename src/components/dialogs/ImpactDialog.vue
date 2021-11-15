<template>
    <v-dialog v-model="dialog">
        <template v-slot:activator="{ on, attrs}">
            <v-btn 
            v-bind="attrs"
            v-on="on">
                {{ $t("common.add_impact") }}
            </v-btn>
        </template>

        <v-card>
            <v-card-title>
                {{ $t("common.add_impact") }}
            </v-card-title>
            <v-text-field 
            type="number"
            v-model="impact">
            </v-text-field>
            <v-card-actions>
                <v-btn 
                @click="confirm()"
                color="primary">
                    {{ $t("common.confirm") }}
                </v-btn>
                <v-btn
                @click="dialog = false"
                color="error">
                    {{ $t("common.cancel") }}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    data() {
        return {
            dialog: false,
            impact: 0
        };
    },
    methods: {
        confirm() {
            this.$emit("impact", this.impact);
            this.dialog = false;
        }
    }
}
</script>